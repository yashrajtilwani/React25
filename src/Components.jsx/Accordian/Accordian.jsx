import './style.css'
import data from './data';
import { useState } from 'react';

export default function Accordian(){
    let [toggle, setToggle] = useState(false);
    let [selected, setSelected] = useState(null);
    let [multiple, setMultiple] = useState([]);

    function handleClick(id){
        setSelected( selected === id ? null : id);
    }

    function updateToggle(){
        setToggle(! toggle);
    }

    function handleMultiple(id){
        //if id present in multiple(array) remove it else add it
        let newMultiple = [...multiple];
        const index = newMultiple.indexOf(id);
        if (index !== -1) {
            newMultiple.splice(index, 1); // Remove if present
        } else {
            newMultiple.push(id); // Add if not present
        }
        setMultiple(newMultiple);
    }

    return (
        <div className="Accordian">
            <h1>Accordian</h1>
            <div className='AccordianBody'>
                {
                    data && data.length>0 ?
                    data.map((data) => (
                            <div className='segment' key={data.id} onClick={toggle? () => handleMultiple(data.id): () => handleClick(data.id)}>
                                <div className='question'>
                                    <h4>{data.ques}</h4>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                
                                { 
                                    toggle ? 
                                    multiple.includes(data.id) && ( <p className='Answer'>{data.text} </p> ) :
                                    selected === data.id && ( <p className='Answer'>{data.text} </p> )   
                                }
                            </div>
                        )
                    ) :
                    <p>data not found</p>
                }
                <button onClick={updateToggle} className='toggleButton' >Toggle</button>
            </div>
        </div>
    )
}