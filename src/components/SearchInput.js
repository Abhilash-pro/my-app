import React from 'react';
import {InputGroup,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class SearchInput extends React.Component{

    render(){
        return(
            <div>
                <InputGroup className="m-1">
                    {/* <FormControl
                    placeholder="Enter Your Mobile Number"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    width ="300"
                    onChange={this.handleChange}
                    value= {this.state.phonenumber}
                    /> */}
                    <InputGroup.Append>
                    <Link to= {"/login"}    >
                    <Button 
                    variant="primary"
                    className="center"
                    // onClick={this.handleClick}
                    >Get Started</Button>
                    </Link> 
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    };
};