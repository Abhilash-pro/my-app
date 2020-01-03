import React from 'react';
import './Loginstyle.css';


function Signup (){


        return(
            <div className="body"> 
        
                    <form className="container"> 
                        <h4 className = "text-center" >Sign Up!</h4>
                                <input 
                                    className= "input" 
                                    type= "number"  
                                    placeholder ="Please Enter Your phone number"
                                />
                            <input 
                                className= "input" 
                                type= "password"  
                                placeholder ="Enter Password"
                                />
                            <input 
                                className= "input" 
                                type= "password"  
                                placeholder ="Re-Type Password"
                        />
                            <button
                            className="button" 
                    
                            >Sign Up!</button>
                    </form>
            </div>
        );
    }



export default Signup;