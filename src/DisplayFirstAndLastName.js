import React from 'react'

const DisplayFirstAndLastName = (props) => {

    console.log(props)
    return (
        <div>
            {props.firstName}       {/*do propsu może być przekazane wszystko*/}
            {' '}
            {props.lastName}
        </div>
    )
}

export default DisplayFirstAndLastName