import { Link, Outlet } from "react-router-dom";
import React from "react";
import Popup from "reactjs-popup";
import Navbar from "./navbar";
import './layout.css';
import { useState } from "react";
import AddReview from "./addreview";
const Layout = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
  return (
    <div style={{fontSize:'x-large'}}>
        <Navbar />
        <div>
            <nav className="navbar-layout">
                        <div className="container-layout">
                            <ul className="nav-links-layout">
                                <li><Link to="/" className={activeLink === '/' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveLink('/')}>Review</Link></li>
                                <li><Link to="/preview" className={activeLink === '/preview' ? 'nav-link active' : 'nav-link'}onClick={() => setActiveLink('/preview')}>Interview</Link></li>
                                <li><Link to="/salary"className={activeLink === '/salary' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveLink('/salary')}>Salary</Link></li>
                                <li><Link to="/benefits"className={activeLink === '/benefits' ? 'nav-link active' : 'nav-link'}onClick={() => setActiveLink('/benefits')}>Benefits</Link></li>
                            </ul>
                            <div className="right-corner">
                                <button >Following</button>
                                <button onClick={togglePopup}>Add a Review</button>

                                {isPopupOpen && (
                                    <Popup
                                        open={isPopupOpen}
                                        onClose={togglePopup}
                                        modal
                                        closeOnDocumentClick
                                        overlayStyle={{ overflowY: "hidden" }}
                                    >
                                        <div className="popupContent">
                                            <div className="popupInnerContent">
                                                <AddReview />
                                            </div>
                                        </div>
                                    </Popup>
                                )}
                            </div>
                        </div>
            </nav>
            <div style={{display:'flex'}}>
                <Outlet />
                <div style={{width:'500px'}}>
                    <div style={{border:'1px solid ',borderRadius:'10px',marginTop:'10px',padding:'10px'}}>
                        <img src="https://www.glassdoor.co.in/assets/images/infosite/sample-company-bowl.png" alt='' style={{filter: 'blur(8px)' ,width:'-webkit-fill-available'}}/>
                        <h2>Want the inside scoop on your own company?</h2>
                        <p>Check out your Company Bowl™ for anonymous work chats.</p>
                        <input type="text" style={{borderRadius: '10px',width: '-webkit-fill-available',height:'30px'}}/>
                    </div>
                    <div style={{border:'1px solid gray',borderRadius:'10px',marginTop:'10px',padding:'10px'}}>
                        <h3>Reviews by Job Title</h3>
                        <p>Systems Engineer(12044)</p>
                        <p>Senior Systems Engineer(8741)</p>
                        <p>Technology Analyst(8628)</p>
                        <p>Software Engineer(3299)</p>
                        <p>Technology Lead(3009)</p>
                    </div>
                    <div style={{color:"blue",border:'1px solid gray',borderRadius:'10px',marginTop:'10px',padding:'10px'}}>
                        <h3>Infosys Job Seekers Also Viewed</h3>
                        <p>Wipro</p>
                        <p> 3.7★</p>
                        <p>58,514 reviews</p>
                        <hr/>
                        <p>TCs</p>
                        <p> 3.5★</p>
                        <p>38,514 reviews</p>
                        <hr/>
                        <p>Accenture</p>
                        <p> 3.8★</p>
                        <p>1,08,514 reviews</p>
                        <hr/>
                        <p>Cognizant</p>
                        <p> 3.9 ★</p>
                        <p>5,08,514 reviews</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
};

export default Layout;
