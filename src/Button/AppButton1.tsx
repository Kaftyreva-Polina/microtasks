import React, {MouseEvent} from "react";
import './App.css'


function App() {
    // const myFirstSubscriber = () => {
    //     console.log("Hello I'm Ivan!")
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I'm Ivan1!")
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }


    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={mySecondSubscriber}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={() => onClickHandler('some info')}>*/}
            {/*    MyYouTubeChanel-3*/}
            {/*</button>*/}

            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}>
                MyYouTubeChanel-1
            </button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Vasiliy")}>
                MyYouTubeChanel-2
            </button>
        </div>
    );
}

// export default App;