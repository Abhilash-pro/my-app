import React from 'react';
import {useParams} from 'react-router-dom';
function AuthSuccess(props){
    console.log(props.match.params.id)
    return (
        <div className="bg-primary text-center">
            <h1>Hello {props.match.params.id}</h1>
        </div>
    );
}

export default AuthSuccess;