import React from "react";

const Data=({input,setInput})=>{
    const handleClose=(data)=>{
        console.log(data)
       const val= input.filter((item)=>{
            return item.date!==data.date
        })
        setInput(val)
    }

    return(
        <div className="data-container">
            {
                input.map((data)=>{
                    return(
                    <div className="item-container" key={data.date}>
                        <div className="close" onClick={()=>handleClose(data)}>x</div>
                        <h3>BMI: {data.bmi}</h3> 
                        <div className="details-container">
                            <span>Weight: {data.weight}</span>
                            <span>Height: {data.height}</span>
                            <span>Date: {data.date}</span>
                        </div>
                    </div>
                    )
                })
                
            }
        </div>
    )
}

export default Data