import React from 'react'

function Ans(props){
    return(
        <div>{console.log(props.data)}
            {
                props.data && <div>
                     <h1>{props.data.title}</h1>
                     <p>{props.data.body}</p>
                     <p>{props.data.body}</p>
                     <p>{props.data.body}</p>
                     <p>{props.data.body}</p>
                     <p>{props.data.body}</p>
                </div>
            }
        </div>
    )
}

export default Ans