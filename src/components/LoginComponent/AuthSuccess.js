import React from 'react';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

function AuthSuccess (props){
    return (
        <div className="bg-primary text-center">
            <h1>{props.name}</h1>
        </div>
    );
}

export default AuthSuccess;