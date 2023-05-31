import React from 'react'

export const Alert = (props) => {
    return (
        <div>
            <div className={`alert alert-${props.type}`} role="alert">
                {props.message}
            </div>
        </div>
    )
}
