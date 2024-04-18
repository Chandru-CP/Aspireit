from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.forms.models import model_to_dict
from .models import Data
import json


@csrf_exempt
@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def home(request, user_id=None):
    if request.method == 'GET':
        return get_form_data(request, user_id)

    elif request.method == 'POST':
        return create_form_data(request)

    elif request.method == 'DELETE':
        return delete_form_data()


def get_form_data(request, user_id=None):
    if user_id:
        form_data = Data.objects.filter(id=user_id).first()
        if form_data:
            response_data = {
                'id': form_data.id,
                'name': form_data.name,
                'UserEmail': form_data.UserEmail,
                'UserMobileNumber': form_data.UserMobileNumber,
                'UserPassword': form_data.UserPassword,
            }
            return JsonResponse(response_data)
        else:
            return JsonResponse({"error": "User not found"}, status=404)
    else:
        form_data = Data.objects.all()
        response_data = [
            {
                'id': user.id,
                'name': user.name,
                'interview_experience': user.interview_experience,
                'position': user.position,
                'question_text': user.question_text,
                'about': user.about,
                'overall_difficulty': user.overall_difficulty,
            } for user in form_data
        ]
        return JsonResponse(response_data, safe=False)


@csrf_exempt
def create_form_data(request):
    try:
        form_data_json = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid request format"}, status=400)

    form_data = Data(
        name=form_data_json.get('name', ''),
        interview_experience=form_data_json.get('interview_experience', ''),
        position=form_data_json.get('position', ''),
        question_text=form_data_json.get('question_text', ''),
        about=form_data_json.get('about', ''),
        overall_difficulty=form_data_json.get('overall_difficulty', ''),
    )
    form_data.save()
    print(form_data.id)

    return JsonResponse({'message': 'POST request successful', 'formData': model_to_dict(form_data)})


def delete_form_data():
    form_data = Data.objects.first()
    if form_data:
        form_data.delete()
        return JsonResponse({'message': 'DELETE request successful'})
    else:
        return JsonResponse({'error': 'No FormData found'}, status=404)
