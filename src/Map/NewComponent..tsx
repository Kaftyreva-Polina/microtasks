import React from "react";

type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props:NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index)=>{
                return(
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}


// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]
