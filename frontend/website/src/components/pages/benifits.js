import React, { useState } from 'react';
import BenefitList from './benifitList'; // Corrected import

export default function Benefits() {
    const [data, setData] = useState({
        "topic": "Insurance, Health & Wellness",
        "type1": "Life Insurance",
        "type2": "Vision Insurance",
        "type3": "Dental Insurance",
        "type4": "Health Care & Insurance",
        "ratings1": "3.8 ★ (391 Ratings) Employer Verified",
        "ratings2": "3.7 ★ (15 Ratings)",
        "ratings3": "3.8 ★ (13 Ratings)",
        "ratings4": "3.8 ★ (391 Ratings) Employer Verified"
    });


    // Function to handle button click and update data state
    const handleButtonClick = (category) => {
        // Use a switch statement or other logic to set data based on the category
        switch (category) {
            case 'Insurance':
                setData({
                    "topic": "Insurance, Health & Wellness",
                    "type1": "Life Insurance",
                    "type2": "Vision Insurance",
                    "type3": "Dental Insurance",
                    "type4": "Health Care & Insurance",
                    "ratings1": "3.8 ★ (391 Ratings) Employer Verified",
                    "ratings2": "3.7 ★ (15 Ratings)",
                    "ratings3": "3.8 ★ (13 Ratings)",
                    "ratings4": "3.8 ★ (391 Ratings) Employer Verified"
                });
                break;
            case 'Financial':
                    setData({
                        "topic": "Financial & Retirement",
                        "type1": "Performance Bonus",
                        "ratings1": "2.9 ★ (332 Ratings) Employer Verified",
                        "type2": "Pension Plan",
                        "ratings2": "3.4 ★ (35 Ratings) Employer Verified",
                        "type3": "Retirement Plan",
                        "ratings3": "4 ★ (26 Ratings)",
                        "type4": "Stock Options or Equity",
                        "ratings4": "4 ★ (18 Ratings) Employer Verified"
                    });
                break;
            case 'Family':
                    setData({
                        "topic": "Family & Parenting",
                        "type1": "Maternity & Paternity Leave",
                        "ratings1": "4 ★ (1,701 Ratings) Employer Verified",
                        "type2": "Work From Home",
                        "ratings2":"4.1 ★ (305 Ratings) Employer Verified",
                        "type3": "Unpaid Extended Leave",
                        "ratings3": "4 ★ (26 Ratings)",
                        "type4": "Reduced or Flexible Hours",
                        "ratings4": "4 ★ (18 Ratings) Employer Verified",
                        "type5":"Childcare",
                        "rating5": "4.1 ★ (20 Ratings) Employer Verified"
                    });
                break;
            case 'Vacation':
                setData({
                    "topic": "FVacation & Time Off",
                    "type1": "Sick Leave",
                    "ratings1": "2.9 ★ (332 Ratings) Employer Verified",
                    "type2": "Vacation & Paid Time Off",
                    "ratings2": "3.4 ★ (35 Ratings) Employer Verified",
                    "type3": "Bereavement Leave",
                    "ratings3": "3.9 ★ (33 Ratings)  Employer Verified",
                });
                break;
            case 'Perks':
                    setData({
                        "topic": "Perks & Benefits",
                        "type1": "Gym Membership",
                        "ratings1": "4.1 ★ (382 Ratings) Employer Verified",
                        "type2": "Employee Assistance Program",
                        "ratings2": "4.4 ★ (35 Ratings) Employer Verified",
                        "type3": "Employee Discount",
                        "ratings3": "3.8 ★ (45 Ratings)",
                        "type4": "Company Car",
                        "ratings4": "4.1 ★ (38 Ratings) ",
                        "type5": "Free Lunch or Snacks",
                        "ratings5": "4.1 ★ (6 Ratings) "
                    });
                    break;
            case 'Professional':
                setData({
                    "topic": "Professional Support",
                    "type1": "Performance Bonus",
                    "ratings1": "2.9 ★ (332 Ratings) Employer Verified",
                    "type2": "Pension Plan",
                    "ratings2": "3.4 ★ (35 Ratings) Employer Verified",
                    "type3": "Retirement Plan",
                    "ratings3": "4 ★ (26 Ratings)",
                    "type4": "Stock Options or Equity",
                    "ratings4": "4 ★ (18 Ratings) Employer Verified"
                });
                break;
            default:
                setData(null);
        }
    };

    return (
        <div style={{ flex: 1 }}>
            <div>
                <h2>Which benefits does Infosys provide?</h2>
                <p>Current and former employees report that Infosys provides the following benefits. It may not be complete.</p>
                <div>
                    {/* Use handleButtonClick function to set data */}
                    <button onClick={() => handleButtonClick('Insurance')}>Insurance, Health & Wellness</button>
                    <button onClick={() => handleButtonClick('Financial')}>Financial & Retirement</button>     
                    <button onClick={() => handleButtonClick('Family')}>Family & Parenting</button>
                    <button onClick={() => handleButtonClick('Vacation')}>Vacation & Time Off</button>
                    <button onClick={() => handleButtonClick('Perks')}>Perks & Benefits</button>
                    <button onClick={() => handleButtonClick('Professional')}>Professional Support</button>
                </div>
                {/* Render BenefitList component with data */}
                <BenefitList data={data} />
            </div>
        </div>
    )
}
