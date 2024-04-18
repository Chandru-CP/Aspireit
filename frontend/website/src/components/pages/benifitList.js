import React from 'react';

const InsuranceList = ({ data }) => {
  const { topic, ...insuranceData } = data;

  return (
    <div >
      <h2>{topic}</h2>
      <div style={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gridGap: '10px'}}>
      {Object.keys(insuranceData).map((key) => {
        if (key.startsWith('type')) {
          const insuranceType = insuranceData[key];
          const ratingsKey = `ratings${key.slice(4)}`;
          const ratings = insuranceData[ratingsKey];
          return (
            <div key={key} style={{flex:1,margin:'10px',minWidth: 'fit-content'}}>
              <h3 style={{color:'blue'}}>{insuranceType}</h3>
              <p>{ratings}</p>
            </div>
          );
        }
        return null; // Skip other keys
      })}
      </div>
    </div>
  );
};

export default InsuranceList;
