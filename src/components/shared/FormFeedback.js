import React from 'react';

function FormFeedback(props) {
    const feedback = props.feedback
    
    if(feedback) {
        return (
            <div style={{ 
                backgroundColor: feedback.status === "error" ? "red" : "green", 
                color: "white",
                margin: 10,
                padding: 15,
            }}
            >
                {feedback.message}
            </div>
        )
    } else {
        return <></>
    }
}

export default FormFeedback;