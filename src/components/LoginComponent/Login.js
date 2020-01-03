import React ,{useState} from 'react';
import './Loginstyle.css';
import {useHistory} from 'react-router-dom';



function Login(){

    const [phone, setPhone] = useState();
    const [pwd,setPwd] =useState();

    const history =useHistory();

    function handleChange(event){
        setPhone(event.target.value);
    }
    
    function handlePwdChange(event){
        setPwd(event.target.value);
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
                    onChange={handlePwdChange}
                    value={pwd}
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