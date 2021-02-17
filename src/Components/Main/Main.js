import React, {useState, useEffect} from 'react';
import './Main.css';

export default function Main() {
    const [value, setValue] = useState(0);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const addValue = () => {
        let newValue = value + 1;
        console.log(newValue);
        setValue(newValue)
    }

    const saveInput = () => {
        setTasks((old) => {
            return [...old, { id : Math.random()*1000, workout: input }]
        });
    }

    const removeValue = (id) => {
        let newray = tasks.filter(item => item.id !== id)
        setTasks(newray)
    }
    useEffect(() => { 
    }, []);
    return (
        <div>
            <h2>useEffect Basics</h2>
            <h3>{value}</h3>
            <button type="submit" onClick={() => addValue()}>Click Me</button>
            <h1>To do</h1>
            {tasks.map((task) => {
                const {id, workout } = task
                return (<div key={id} >
                    <p>{workout}</p>
                    <button type="submit" onClick={() => removeValue(id)}>Remove</button>
                </div>)
            })}
            <input type="text" onChange={(event) => setInput(event.target.value)}></input>
            <button type="submit" onClick={() => saveInput()}>Save input</button>
        </div>           
    );
}