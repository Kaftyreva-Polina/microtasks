import React from "react";
import './App.css'
import {Button} from "./Button/components/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("I'm stupid button")
    }
    return (
        <div className="App">
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("I'm Vasiliy", 22, "live in Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid Button"} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
