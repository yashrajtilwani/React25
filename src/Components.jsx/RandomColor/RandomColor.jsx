import { useState } from "react";
import "./RandomColor.css"

export default function RandomColor(){
    let [color, setColor] = useState(updateHex);

    //type === true => Hex else RGB
    let [type, setType] = useState(true);
    
    function randomGenerator(nums){
        return (Math.floor(Math.random() * nums));
    }

    function updateRgb(){
        let color = `rgb(${randomGenerator(256)},${randomGenerator(256)},${randomGenerator(256)})`;
        setColor(color);
    }

    function updateHex(){
        let color = "#";
        let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for(let i = 0; i< 6; i+=1){
            color += `${options[randomGenerator(16)]}` 
        }
        return color;
    }

    return (
        <div className="RandomColorContainer" style={{backgroundColor: color}}>
            <div className="RandomColor">
                <h1 className="ColorHeading">Random Color Generator</h1>
                <h2 className="ColorHeading">{color}</h2>
                <div className="type">
                    <button className="typeButton" onClick={() => setType(true)}>HEX Color</button>
                    <button className="typeButton" onClick={() => setType(false)}>RGB Color</button>
                </div>
                <button className="typeButton" onClick={type ? () => setColor(updateHex) : updateRgb}>Random Color</button>
            </div>
            
        </div>
    )
}