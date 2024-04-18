import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

export default function AddReview() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post("http://127.0.0.1:8000/data/create_form_data", formData);
      console.log(response.data);
      navigate('./')
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <div>
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <label className="lable-booking" htmlFor="name">
          Name:
        </label>
        <input
          className="input-booking"
          type="text"
          id="name"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>Position</label>
        <select id="position" name="Position" onChange={handleInputChange}>
          <option value="Systems Engineer">Systems Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>
        <br />
        
        <label className="lable-booking" htmlFor="name">
        interview Question:
        </label>
        <input
          className="input-booking"
          type="text"
          id="question_text"
          onChange={handleInputChange}
          required
        />
        <br />

        <label className="lable-booking" htmlFor="name">
        About interview:
        </label>
        <input
          className="input-booking"
          type="text"
          id="about"
          onChange={handleInputChange}
          required
        />
        <br />

        <label className="lable-booking" htmlFor="Role">
        Overall Score
        </label>
        <input
          className="input-booking"
          type="number"
          id="overall_difficulty"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>interview experiance</label>
        <select id="interview_experience" name="interview_experience" onChange={handleInputChange}>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
