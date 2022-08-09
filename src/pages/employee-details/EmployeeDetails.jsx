import SideBar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "./api";
import {MdOutlineEdit} from "react-icons/md";
import './style.css';

const EmployeeDetails = () => {
    const params = useParams();
    
    const { data, error, isLoading } = useGetEmployeeByIdQuery(params.id);
    console.log(data);
    
    const navigate = useNavigate();
    return(
        
        <div>
            <SideBar/>
            <main>
                
            <section id="section-head">
                <h1 id="heading">Employee Details</h1>
                <button id="click-edit" onClick={(e)=>{e.stopPropagation();navigate(`/update/${data.data.id}`)}}><div id="edit-bg"><MdOutlineEdit className="plus"/></div>< div id="edit-text"><h4>Edit</h4></div></button>
            </section>
            <div className="emp-details">
                <div id="detail-field">Employee Name<br/>{data?.data?.name}</div>
                <div id="detail-field">Employee Id <br/>{data?.data?.id}</div>
                <div id="detail-field">Role<br/>{data?.data?.role}</div>
                <div id="detail-field">Status<br/>{data?.data?.status}</div>
                <div id="detail-field">JoiningDate<br/>{data?.data?.dateofjoining}</div>
            </div>
            
            
            </main>
           
        </div>
       
    );
}

export default EmployeeDetails;