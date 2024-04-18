import React from 'react';
import './page.css';
import ReviewCard from '../card/reviewCard';
export default  function review(){
    return(
        <div style={{flex:1}}>
            <div className='review-main'>
                <h2>Infosys reviews</h2>
                <p>71% would recommend to a friend</p>
                <p>(101182 total reviews)</p>
                <div style={{display:' -webkit-box'}}>
                    <div style={{margin:'10px'}}>
                        <img src='https://media.glassdoor.com/people/sql/7927/infosys-ceo1544651992277.png' alt='img' style={{borderRadius:'50%'}}/>
                    </div>
                    <div style={{alignContent: 'center'}}>
                        <h2 style={{marginBottom:0}}>Salil S. Parekh</h2>
                        <p style={{marginTop:'5px',color:'gray'}}>80% approve of CEO</p>
                    </div>
                </div>
                <p>Infosys has an employee rating of 3.7 out of 5 stars, based on 1,01,182 company reviews on Glassdoor which indicates that most employees have a good working experience there. The Infosys employee rating is in line with the average (within 1 standard deviation) for employers within the Information Technology industry (3.8 stars).</p>

            </div>
            <div className='review-main'>
                <h2>Top Review Highlights by Sentiment</h2>
                <p>Excerpts from user reviews, not authored by Glassdoor</p>
                <div style={{display: 'flex'}}>
                    <div style={{    margin: '10px',padding: '20px'}}>
                        <h3 style={{color:'green'}}>Pros</h3>
                        <p>"<span style={{color:'green',textDecoration:'underline'}}>Good work life balance </span>although it may depend on the kind of project you are in." (in 7327 reviews)</p>
                        <p>"<span style={{color:'green',textDecoration:'underline'}}>Work culture and their process is was good </span>where employees will not have any worries." (in 5262 reviews)</p>
                    </div>
                    <div style={{    margin: '10px',padding: '20px'}}>
                        <h3 style={{color:'red'}}>Cons</h3>
                        <p>"<span style={{color:'green',textDecoration:'underline'}}>Low salary</span> when I joined and employees are not counted when it comes to priority." (in 10290 reviews)</p>
                        <p>"<span style={{color:'green',textDecoration:'underline'}}>No salary hikes</span> and reason behind is your current salary is more as compare to others." (in 2960 reviews)</p>
                    </div>
                    
                </div>
            </div>
                <ReviewCard/>
        </div>
    )
    
}