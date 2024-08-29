import React, { useState } from "react";
import Title from "./Title";

function Esignature() {

const [date, setDate] = useState("")
const [text, setText] = useState("")

function handleDateInput(params){
setDate(params.target.value)
}
function handleTextInput(params){
setText(params.target.value)
}

return (
    <div>
        <Title text={text} />
        <Title text={date} />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ipsum a nulla quae soluta repellendus minima optio architecto fugiat nisi doloribus neque unde, fugit incidunt esse maiores laudantium temporibus labore!</p>
   
   <input type="date" value={date} onChange={handleDateInput} />
   <input type="text" value={text} onChange={handleTextInput} />
   
    </div>
)
}

export default Esignature