import React from 'react';
import './card.css';

const SalaryCard = ({ data, conversations }) => {
  return (
    <div className="salary-card">
      {/* Render salary data */}
      {data && data.role1 && (
      <div className="salary-data">
        <h2 style={{ marginBottom: 0 }}>{data.role1}</h2>
        <h3 style={{ marginTop: "8px" }}>{data.salary1}</h3>
        <p style={{ marginBottom: 0 }}>Name: {data.role2}</p>
        <p style={{ marginTop: "8px" }}>Position: {data.salary2}</p>
        <p style={{ marginBottom: 0 }}>Name: {data.role3}</p>
        <p style={{ marginTop: "8px" }}>Position: {data.salary3}</p>
      </div>
      )}

      {/* Render conversations if available */}
      {conversations && conversations.topic && (
        <div className="conversation">
            <h2>{conversations.topic}</h2>
            <h3 style={{ marginBottom: 0}}>{conversations.job1}</h3>
            <p style={{ marginBottom: "8px"}}>{conversations.question1}</p>
            <h3 style={{ marginBottom: 0}}>{conversations.job2}</h3>
            <p style={{ marginBottom: "8px"}}>{conversations.question2}</p>
        </div>
      )}
    </div>
  );
};

export default SalaryCard;
