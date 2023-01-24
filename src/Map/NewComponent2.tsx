import React from "react";

type TopCarsType = {
    manufacturer: string
    model: string
}

type NewComponent2Type = {
    topCars: TopCarsType[]
}
export const NewComponent2 = (props: NewComponent2Type) => {
    return (
        <table>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{objectFromTopCarsArray.model}</th>
                            <td>{objectFromTopCarsArray.manufacturer}</td>
                        </tr>
                    )
                }
            )}
        </table>
    )
}


