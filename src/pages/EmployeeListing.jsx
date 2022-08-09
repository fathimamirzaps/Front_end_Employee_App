import SideBar from "../components/Sidebar";
import '../style/style.css';
import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeByIdMutation, useGetEmployeeQuery } from "../services/api";
import {MdOutlineAdd, MdOutlineDelete,MdOutlineEdit} from "react-icons/md";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteEmployeeByIdMutation();
    const { data, error, isLoading } = useGetEmployeeQuery();
    console.log(data);
    
    
    return(
        <div>
            <SideBar/>
            <main>
           
            <section id="section-head">
                <h1 id="heading">Employee List</h1>
                <button id="click-edit" onClick={() => navigate('/create')}><div id="edit-bg"><MdOutlineAdd className="plus"/></div>< div id="edit-text"><h4>Create Employee</h4></div></button>
            </section>
            
            {data ? (
                <table>
                <thead>
                  <tr className='tablehead'>
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Joining Date</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>Experience</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    data.data.map(element => {
                      return (
                        <tr key={element.id} onClick = {()=>{navigate(`/details/${element.id}`)}}>
                          <td>{element.name}</td>
                          <td>{element.id}</td>
                          <td>{element.dateofjoining}</td>
                          <td><span className={element.status}>{element.status}</span></td>
                          <td>{element.role}</td>
                          <td>{element.experience}</td>
                          <td>
                            <div>
                                
                                <span
                                className="delete"
                                onClick={(e)=>{ e.stopPropagation();deleteEmployee(element.id)}}
                                ><MdOutlineDelete /></span>
                                <span 
                                className="edit"
                                onClick={(e)=>{e.stopPropagation();navigate(`/update/${element.id}`)}}
                                ><MdOutlineEdit/></span>
                              
                            </div>
                          </td>
                          
                          
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            ):null}
            
            
            </main>
           
      </div>
       
    );
}

export default EmployeeList;