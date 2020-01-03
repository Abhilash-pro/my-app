import React from 'react';
function AuthSuccess(props){
    console.log(props.match.params.id)
    return (
        <div className="bg-primary text-center">
            <h1>Hello {props.match.params.id}</h1>
        </div>
    );
}

export default AuthSuccess;