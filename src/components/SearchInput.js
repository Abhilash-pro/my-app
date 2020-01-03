import React from 'react';
import {InputGroup,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class SearchInput extends React.Component{

    render(){
        return(
            <div>
                <InputGroup className="m-1">
                    <InputGroup.Append>
                    <Link to= {"/login"}    >
                    <Button 
                    variant="primary"
                    className="center"
                    >Get Started</Button>
                    </Link> 
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    };
};