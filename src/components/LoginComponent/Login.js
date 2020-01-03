import React ,{useState} from 'react';
import './Loginstyle.css';
import AuthSuccess from './AuthSuccess';
import {useHistory} from 'react-router-dom';



function Login(){
    const [phone, setPhone] = useState();
    const history =useHistory();

    function handleChange(event){
        setPhone(event.target.value);
    }

    function handleClick(){
        history.push(`/login/authsuccess/:${phone}`);
    }
    return (
        <div className="body"> 
        
        <form className="container"> 
            <h4 className = "text-center" >Phone :{phone}</h4>
                    <input 
                        className= "input" 
                        type= "number"  
                        placeholder ="phone number"
                        onChange={handleChange}
                        value={phone}
                        phonenumber={phone}
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