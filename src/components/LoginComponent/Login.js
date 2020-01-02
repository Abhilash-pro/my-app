import React ,{useState} from 'react';
import './Loginstyle.css';
import AuthSuccess from './AuthSuccess';
import {Link} from 'react-router-dom';



function Login (){

    const [phn, setPhn] = useState();

    function handleChange(event){
        console.log(event.target.value)
        return setPhn(event.target.value);

    }

    function handleClick(){
        return (
                <AuthSuccess name = {phn}/>
        );
    }
        
        return (
            <div className="body"> 
          
            <form className="container">  
                    <input 
                        className= "input" 
                        type="number" 
                        placeholder= "Phone number" 
                        onChange={handleChange}
                        value={phn}
                    />
                    <input 
                        className= "input" 
                        type= "password"  
                        placeholder ="Password" 

                        />
                    <button
                    className="button" 
                    onClick={handleClick} 
                    >Login</button>
            </form>
           
            </div>
        );
    }



export default Login;