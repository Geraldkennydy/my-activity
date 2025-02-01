import React from 'react'

function Profile(props){

    return (
        <div >
        <h1>Email: {props.Email}</h1>
        <h1 >Phone: {props.Phone}</h1>
        <h1 >Address: {props.Address}</h1>
        </div>
        
        
        
    )
}

export default Profile;