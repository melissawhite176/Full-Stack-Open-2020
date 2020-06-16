import React from 'react'

const ErrorMessage = ({message}) => {
    if (message === null || message.length === 0) {
        return null
    }
    return (
        <div className="errorMessage">
            {message}
        </div>

    )
}

export default ErrorMessage 