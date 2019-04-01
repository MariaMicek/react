import React from 'react'

//string, number (wyświetlane)
const reactCanDisplayString = 'Ala ma kota'
const reactCanDisplayNumber = 16

//boolean, null, undefined (niewyświetlane)
const reactCanNotDisplayBoolean = true      
const reactCanNotDisplayNull = null
const reactCanNotDisplayUndefined = undefined

//wartości złożone (wyświetlane)
const reactCanDisplayFunctionCall = () => 'Ala ma psa'
const reactCanDisplayArray = ['Ala', 'Ola', 'Ela']
const reactCanDisplayReactElement = <b>Gruba Ala</b>

//obiekt (błąd)
const reactShowsErrorWhenObject = {
    name: 'Marysia'
}


const WhatReactCanDisplay = (props) => (
    <div>
        <h4>Strings: </h4>
        <p>
            {reactCanDisplayString}
        </p>
        <h4>Numbers: </h4>
        <p>
            {reactCanDisplayNumber}
        </p>
        <h4>Boolean: </h4>
        <p>
            {reactCanNotDisplayBoolean}
        </p>
        <h4>Null: </h4>
        <p>
            {reactCanNotDisplayNull}
        </p>
        <h4>Undefined: </h4>
        <p>
            {reactCanNotDisplayUndefined}
        </p>
        <h4>Function: </h4>
        <p>
            {reactCanDisplayFunctionCall}       
        </p>
        <h4>Function call: </h4>
        <p>
            {reactCanDisplayFunctionCall()}
        </p>
        <h4>React element: </h4>
        <p>
            {reactCanDisplayReactElement}
        </p>
        <h4>Array: </h4>
        <p>                                 
            {reactCanDisplayArray}     {/*wyświetla elementy tablicy, obok siebie, skleja je*/}
        </p>
        <h4>Array mapping: </h4>                
        <ul>                                 
            {                               
                reactCanDisplayArray.map(               
                    (element, index) => (
                        <li
                            key = {index + element}
                        >
                            {element}
                        </li>
                    )
                )
            }     
        </ul>
        <h4>Object: </h4>
        {/* <p>
            {reactShowsErrorWhenObject}
        </p> */}
    </div>
)

export default WhatReactCanDisplay