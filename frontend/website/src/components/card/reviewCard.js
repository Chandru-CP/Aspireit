import React from 'react';
import '../pages/page.css';

export default function ReviewCard() {
  const feedback = [
    {
      "title": "Great company.",
      "role": "Account Manager",
      'Recommend': 'green',
      'CEOapproval': 'green',
      'Businessoutlook': 'green',
      "pros": "Supportive environment. Excellent job security. Some teams tend to be overloaded vehemently. Other teams tend to have decent work-life balance.",
      "cons": "None as such. I only have positive experience."
    },
    {
      "title": "Company Review",
      "role": "Technology Analyst",
      'Recommend': 'green',
      'CEOapproval': 'red',
      'Businessoutlook': 'red',
      "pros": "There is Good work life balance",
      "cons": "Salary hike is not up to mark"
    },  
    {
        "title": "Right place to Start your career",
        "role": "Test Engineer",
        'Recommend': 'green',
        'CEOapproval': 'green',
        'Businessoutlook': 'green',
        "pros": "Best place to start you career , very good training, Personal growth , lot of opportunities to learn new tools and technology ,Onsite opportunities.",
        "cons": "Hike is not so good ,Low pay there"
      },
    {
        "title": "Work Exp with Infosys",
        "role": "Associate Consultant",
        'Recommend': 'red',
        'CEOapproval': 'red',
        'Businessoutlook': 'red',
        "pros": "You need to pay the parking charges if you commute through your vehicle. The problem here is this parking is owned by Infosys and no other vendor but still they are charging money.",
        "cons": "No or leas increments - Although it offers world class freshers training not just in India but Asia also but it also comes with a low initial salary and less increments over the year many small companies offer comparatively large CTCs for the same profile as money is a essential motivator less starting salary counts as a negative"
      }
  ];
  const splitIntoLines = (text) => {
    const words = text.split(' ');
    const lines = [];
    for (let i = 0; i < words.length; i += 15) {
      lines.push(words.slice(i, i + 15).join(' '));
    }
    return lines;
  };

  return (
    <div>
      {feedback.map((item, index) => (
        <div key={index} className='interview-card'>
          <h2 style={{ marginBottom: '8px' }}>{item.title} Interview</h2>
          <h3 style={{ marginTop: 0, color: 'gray' }}>{item.role}</h3>
          <h3 style={{ marginBottom: 0 }}>
            <span style={{color:`${item.Recommend}`}}>✔</span>Recommend {''}
            <span style={{color:`${item.CEOapproval}`}}>✔</span>CEO approval {''}
            <span style={{color:`${item.Businessoutlook}`}}>✔</span>Business outlook </h3>
          <h3 style={{ marginBottom: 0 ,color:'green'}}>pros </h3>
          <ul style={{listStyle:'none'}}>
            {splitIntoLines(item.pros).map((line, lineIndex) => (
              <li key={lineIndex}>{line}</li>
            ))}
          </ul>
          <h3 style={{ marginBottom: 0 ,color:'red'}}>cons </h3>
          <ul style={{listStyle:'none',width:'fit-content'}}>
            {splitIntoLines(item.cons).map((line, lineIndex) => (
              <li key={lineIndex}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
