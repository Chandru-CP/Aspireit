import React from 'react';
import SalaryCard from '../card/salaryCard';
import './page.css';
export default function salary(){
    const data1 = {
        'role1' :'Information Technology',
        'salary1':'1L Salaries submitted',
        'role2' :'Technology Lead',
        'salary2':'63,510 salaries',
        'role3' :'Technology Analyst',
        'salary3':'26,242 salaries',
        }
    const data2 = {
        role1: 'Consulting',
        salary1: '74T Salaries submitted',
        role2: 'Consultant',
        salary2: '30,235 salaries',
        role3: 'Lead Consultant',
        salary3: '15,094 salaries',
        }
    const data3 = {
        role1: 'Product & Project Management',
        salary1: '45T Salaries submitted',
        role2: 'Project Manager',
        salary2: '23,495 salaries',
        role3: 'Senior Project Manager',
        salary3: '17,635 salaries',
    }
    const data4 = {
        role1: 'Engineering',
        salary1: '34T Salaries submitted',
        role2: 'Technical Test Lead',
        salary2: '19,555 salaries',
        role3: 'Module Lead',
        salary3: '2,664 salaries',
      }
      const data5 = {
        role1: 'Research & Science',
        salary1: '8T Salaries submitted',
        role2: 'Programme Analyst',
        salary2: '3,450 salaries',
        role3: 'Analyst',
        salary3: '2,387 salaries',
      }
      const data6 = {
        role1: 'Business',
        salary1: '3T Salaries submitted',
        role2: 'Business Analyst',
        salary2: '1,065 salaries',
        role3: 'Manager',
        salary3: '885 salaries',
      };

      const conversations1 = {
        topic: 'Tech India',
        job1: 'Software Engineer',
        question1: 'What\'s the highest offer one can expect at 3.7 years experience when joining Infosys as a senior angular developer. If one has a counter offer already.',
        job2: 'Senior Consultant1',
        question2: 'How can you ask us to give you a specific number when you have not mentioned any quantitative metric in your question? You could have an offer of 6 LPA to which we would say you can get 8 LPA. Or you could have an offer of 15 LPA to which we...'
      };
        
    return(
        <div style={{flex:1}}>
            <h2>Salary Details</h2>
            <div className='card'>
                {/* Render multiple SalaryCard components for salary information */}
                <SalaryCard data={data1}/>
                <SalaryCard data={data2}/>
                <SalaryCard data={data3}/>
                <SalaryCard data={data4}/>
                <SalaryCard data={data5}/>
                <SalaryCard data={data6}/>
            </div>

            <div>
                <h2>Real conversations about pay at Infosys</h2>
                <SalaryCard conversations={conversations1}/>
                <SalaryCard conversations={conversations1}/>
                <SalaryCard conversations={conversations1}/>
            </div>

        </div>
    )
    
}