import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password)
        {alert("Email / Password missing");return;}
    if(!email.includes("@"))
        {alert("Email id should contain @");return;}
    if(password.length < 8)
        {alert("Password should be atleast 8 characters long");return;}

    try{
       const response = await axios.post("http://localhost:3004/login",{email, password});
       console.log("response >>>", response.data);
       alert(response.data.message);
       setEmail('');
       setPassword('');
    }catch(error){
        console.log("error >>>",error);
        if(error && error.response)alert(error.response.data.message);
        else alert("Error");
        setPassword('');
        setEmail('');
    }
}


    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type = "email" value = {email} placeholder='email' onChange = {(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type = "password" value = {password} placeholder='password' onChange = {(e) => setPassword(e.target.value)}/>
            </div>

            <button>Login</button>
        </form>
    )
}

export default LoginForm;