import React from 'react';

const InterviewCard = ({ data }) => {
  // Check if data is null or undefined before mapping over it
  if (!data) {
    return <div>No interview data available</div>;
  }

  return (
    <div >
      {data.map((item) => (
        <div key={item.id} className='interview-card' >
          <h2 style={{marginBottom:'8px'}}>{item.position} Interview</h2>
          <h3 style={{marginTop:0, color:'gray'}}>{item.name}</h3>
          <p>
            <span
              style={{
                color:
                    item.interview_experience = 'positive'
                    ? "green"
                    : "red",
              }}
            >
              ✔
            </span>{item.interview_experience = 'positive' ?
            " Positive " :
            " Negative "
    }Experience {' '}
            <span
              style={{
                color:
                  item.overall_difficulty > 80
                    ? "green"
                    : item.overall_difficulty > 50
                    ? "orange"
                    : "red",
              }}
            >
              ✔
            </span>{item.overall_difficulty > 80 ?
        " Easy" :
        (item.overall_difficulty > 50 ?
            " Little Difficult " :
            " Difficult ")
    }Interview
          </p>
          <h3 style={{marginBottom:0}}>Interview process </h3>
          <p style={{marginTop:'5px'}}>{item.about}</p>
          <h3 style={{marginBottom:0}}>Interview Question: </h3>
          <p style={{marginTop:'5px'}}>{item.question_text}</p>
        </div>
      ))}
    </div>
  );
};

export default InterviewCard;
