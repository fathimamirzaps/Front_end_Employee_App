import '../style/style.css';
import Logo from '../assets/kv logo.png';
import { useNavigate } from 'react-router-dom';
import {removeStorage} from "../services/utils"
import Button from "./Button";
import list from'../assets/List.png';
const SideBar = ({label,options,placeholder,onChange}) => {
    const navigate=useNavigate();
    const handlelogout =() =>{
        removeStorage("idToken");
        navigate("/");  
    };
    return(
        <aside>
            <header><img src = {Logo} alt ="kv logo" id = "kvlogo"/>
            
            <nav>
                <div id="sidebar">
                    <div id="list-img">
                        <img src={list}alt="list" />
                    </div>
                    
                    
                    <a href="/list" id="sidebar-text">Employee List</a>
                    
                </div>
                
                <Button id="logout" label="Logout" onClick={()=>handlelogout()}/>

            </nav>
        </header>
        </aside>

    );
}

export default SideBar;