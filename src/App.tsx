import React, {useState} from "react";
import "./App.css"
import {Input} from "./Input/componentsInput/Input";
import {InputButton} from "./Input/componentsInput/InputButton";


function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("")
    console.log(title)

    const addMessage = (title: string) => {
        let NewMessage = {message: title};
        setMessage([NewMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div className={"App"}>


            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <InputButton name={'+'} callBack={callBackButtonHandler}  />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
