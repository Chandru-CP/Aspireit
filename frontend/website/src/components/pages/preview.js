import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InterviewCard from '../card/InterviewCard';
import BarGraph from '../graph/bargraph.js';

export default function Preview() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/data/");
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return(
        <div style={{flex:1}}>
            <div className='interview-card'>
                <h2>Infosys Interview Questions</h2>
                <div className='search-box'>
                    <input type='text'/>
                    <button>Search</button>
                </div>
                <p>Filter your search results by job function, location or outcome.</p>
                <p>Found <b>16,684 </b>of over <b>16.7T </b>interviews</p>
                <h2>Interviews at Infosys</h2>
                <h2><span>2.7</span>/5 difficulty</h2>
                <BarGraph data={data}/>
                <h2>Interviews for Top Jobs at Infosys</h2>
                <button>Systems Engineer</button>
                <button>Software Engineer</button>
            </div>
            <InterviewCard data={data}/>
        </div>
    )
    
}