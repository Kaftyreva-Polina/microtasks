import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}

// Алгоритм ниверсальной кнопки:
// 1.Всегда есть имя и то что она делат (функция onClick)
//2. В кнопке не должно быть логики (логика на каждую кнопку(нет)
//3. Каждой кноопке будет приходить какой-то колбэк
//4. callBack: () => void - указываем в типизации кнопки
//5. В функции onClickHandle указываем props.callback()
//6. Вкнопке onClick указываем функцию onClickHandle как параметр
//7. Мозги находятся в App.tsx (callBack={Button1Foo} как параметр в кнопке)
//8.   const Button2Foo = () => {
//         console.log("I'm Ivan")
//     } как функция колбэк для каждой кнопки

// const [money, setMoney] = useState([
//     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
// ])
// Сделать универсальные кнопки
