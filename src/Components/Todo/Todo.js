import React, { useState } from 'react';
import data from "../Data/Birthday";
import './Todo.css';

export default function Todo() {
    const [birthdays, setBirthday] = useState(data);

    const clearBirthdays = () => {
        setBirthday([]);
    }
    return (
        <>  
            Birthdays today: {birthdays.length}
            {birthdays.map((birthday) => {
                const { id, age, name, image } = birthday;
                return (
                    <div key={id} className="center">
                    <img src={image}></img>
                    <p>{name}</p>
                    <p>{age}</p>
                    </div>
                )
                
            })}
            <button type="submit" onClick={() => clearBirthdays()}>Clear all birthdays</button>
        </>
    )
}
