import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis} from "recharts";
function SimpleChart({input}){
    console.log(input)
    return (
    <div className="graph">
      <h6 className="graph-header">BMI Analysis</h6>
      <ResponsiveContainer width="60%" aspect={3} >
       <LineChart data={input}>
         <XAxis dataKey ="date" color={"red"}/>
         <Line  dataKey="bmi" />
         <YAxis/>
       </LineChart>
      </ResponsiveContainer>
    </div>
   
    );
};
export default SimpleChart