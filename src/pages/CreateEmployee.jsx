import Button from '../components/Button';
import SideBar from '../components/Sidebar';
import '../style/style.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useCreateEmployeeMutation } from '../services/api';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';

const CreateEmployee = () => {
    const [createEmployee,result] = useCreateEmployeeMutation();
    console.log(result);
    useEffect(()=>{
        if(result.isSuccess){
            navigate('/list')
        }
    },[result]);
     
    const [state,setState] = useState({
        name : '',
        dateofjoining:'',
        role:'',
        status:'',
        username:'dummy',
        password:'dummy',
        departmentId:'12ad0ae0-669d-4bb8-bb6a-d3de24f47a3b',
        experience:0,
        line1:'',
        line2:'',
        city:'',
        state:'',
        country:'',
        pin:''
    });
    useEffect(() => {
        console.log(state);
          }, [state]);
    const onChangeValue = (key,value) => {
        setState({...state,
            [key]: value,
            });}

    const navigate = useNavigate();
    
    return (
        <div>
            <SideBar/>
            <main>
            <section id="section-head">
                <h1 id="heading">Create Employee</h1>
            </section>
            <section id="section-body">
                <div id = "form">
                
                <InputField type="text" value={state.name} id="name" placeholder="Employee Name" label="Employee Name" onChange={(value)=>onChangeValue("name",value)} />
                <InputField type="text" value={state.dateofjoining} id="dateofjoining" placeholder="Joining Date" label="Joining Date" onChange={(value)=>{onChangeValue("dateofjoining",value)}}/>
                <InputSelect value={state.role} id="role" label="Role" placeholder="role" options={[
                    {key:'Role', label:''},
                    {key:'Developer',label:'Developer'},
                    {key:'QA',label:'QA'},
                    {key: 'DevOps',label:'DevOps'}
                ]} onChange={(value)=>{onChangeValue("role",value)}}/>
                <InputSelect label="Status" value={state.status} placeholder="status" id="status"options={[
                    {key:'status', label:'' },
                    {key:'Active',label:'Active'},
                    {key:'Inactive',label:'Inactive'},
                    {key:'Probation',label:'Probation'}
                ]} onChange={(value)=>{onChangeValue("status",value)}}/>
                <InputField type="number" value={state.experience} id="experience" placeholder="Experience" label="Experience" onChange={(value)=>onChangeValue("experience",Number(value))}/>
                <InputField type="text" value={state.line1} id="line1" placeholder="Address Line 1" label="Address Line 1" onChange={(value)=>onChangeValue("line1",value)} />
                <InputField type="text" value={state.line2} id="line2" placeholder="Address Line 2" label="Address Line 2" onChange={(value)=>onChangeValue("line2",value)} />
                <InputField type="text" value={state.city} id="city" placeholder="City" label="City" onChange={(value)=>onChangeValue("city",value)} />
                <InputField type="text" value={state.state} id="state" placeholder="State" label="State" onChange={(value)=>onChangeValue("state",value)} />
                <InputField type="text" value={state.country} id="country" placeholder="Country" label="Country" onChange={(value)=>onChangeValue("country",value)} />
                <InputField type="text" value={state.pin} id="pin" placeholder="Pin" label="Pin" onChange={(value)=>onChangeValue("pin",value)} />


               
                <div id="input">
                    <label  >Upload ID Proof
                    <br />
                    <input type="file" id="proof" name="proof" style={{display:"none"}}/>
                    <div className="choose-file">
                        <label >Choose File</label>
                        <label className="browse" >Browse</label>
                    </div>
                    </label>
                </div>
                
                </div>
                <div id="button-main">
                    <Button id="button1" label="Create" onClick={()=> createEmployee({
                    name: state.name,
                    username:"dummy",
                    password:"dummy",
                    departmentId:"12ad0ae0-669d-4bb8-bb6a-d3de24f47a3b",
                    role:state.role,
                    dateofjoining:state.dateofjoining,
                    status:state.status,
                    experience:Number(state.experience),
                    address:{
                    line1:state.line1,
                    line2:state.line2,
                    city:state.city,
                    state:state.state,
                    country:state.country,
                    pin:state.pin
                    }
                })}/>
                    <Button id="button-cancel" label="Cancel" onClick={()=> navigate('/')}/>
                   
                    
                </div>
            </section>       
            </main>
               
        </div>

    );
}

export default CreateEmployee;