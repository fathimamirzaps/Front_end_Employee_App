import LoginPic from "../assets/login.png";
import Logo from '../assets/kv logo.png';
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../services/api";
import {setStorage} from "../services/utils";
import "../style/style.css"

const Login = () => {
    const [login,result] = useLoginMutation();
    const navigate = useNavigate();
    const[credentials,setCredentials] = useState({
        username : '',
        password : ''
    })
    useEffect(()=>{
        if(result.isSuccess){
            console.log(result.data.data.idToken);
            setStorage("AuthToken",result.data.data.idToken);
            navigate('/list');
        }

    },[result])
    const onChangeValue = (key,value) => {
        setCredentials({...credentials,
            [key]: value,
            });}
    
    return(
        <div className="loginpage" >
         <img src={LoginPic} className="loginpic"/>
        <div className="loginbox">

        <img src={Logo} height={45} width={208} />

       <InputField type="text" value={credentials.name} id="username" placeholder="UserName" onChange={(value)=>onChangeValue("username",value)}/>
        <InputField type="password" value={credentials.value}  id="password" placeholder="Password"  onChange={(value)=>onChangeValue("password",value)}/>
      
        <div>
        <button className="login-button" onClick={() => login(credentials)}>Login</button>

        </div>
        </div>

</div>

    );
}

export default Login;