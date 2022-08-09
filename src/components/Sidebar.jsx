import '../style/style.css';
import Logo from '../assets/kv logo.png';
import list from'../assets/List.png';
const SideBar = ({label,options,placeholder,onChange}) => {
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
                

            </nav>
        </header>
        </aside>

    );
}

export default SideBar;