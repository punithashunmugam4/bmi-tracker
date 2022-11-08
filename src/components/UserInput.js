import React, { useState } from "react";

const UserInput=({input,setInput})=>{
    const [weight,setWeight]=useState("")
    const [height,setHeight]=useState("")
    const [date,setDate]=useState("")

    const handleBmi=()=>{
        if(height!=="" && weight!=="" && date!==""){
        const bmi=((weight  / height / height ) * 10000).toFixed(2)
        if(input.length>=7){
            setInput([{
                'weight':weight,
                'height':height,
                'bmi':bmi,
                'date':date
            }])
        }
        else{
        setInput([...input,{
            'weight':weight,
            'height':height,
            'bmi':bmi,
            'date':date
        }])
    }
}
    }
    return(
        <div className="input-container">
            <label htmlFor="weight">Weight (in kg):</label>
            <input id="weight" type='number' onChange={(e)=>{e.target.value>0 && setWeight(e.target.value)}}></input>
            <label htmlFor="height">Height (in cm):</label>
            <input id="height" type='number'onChange={(e)=>{e.target.value>0 && setHeight(e.target.value)}}></input><br/>
            <label htmlFor="date">Date:</label>
            <input type="date" id='date' onChange={(e)=>setDate(e.target.value)}></input>
            <button className="btn-action" onClick={handleBmi}>Calculate BMI</button>
        </div>
    )
}

export default UserInput