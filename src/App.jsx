import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import CreateEmployee from './pages/CreateEmployee';

function App() {
//   const[userName,setuserName] = useState('dhruv');
//   const[displayName,setdisplayName] = useState('');

//   useEffect(() => {
//     setuserName('ciby');
//   }, []);

//   useEffect(() => {
// console.log('userName---->', userName);
//   }, [userName]);

//   useEffect(()=>{
//     if (displayName !== '') {
//       setuserName('');
//     }
//     console.log('displayName ---->', displayName)
//   },[displayName]);

//   const onusernameChange = (value) => {
//     setuserName(value);
//   };
//   const onbuttonClick = () => {
//     setdisplayName(userName);
    
//   };
  

  
  return (
    <div className="App">
      {/* <TextField label="hi"></TextField>
      <InputField value={userName} label = "enter name" onChange = {onusernameChange}></InputField>
      <Button label="Click Me" handleClick = {onbuttonClick}/>
      {userName}
      <br/>
      {displayName}
      
      <TextField label={userName}></TextField> */}
      <CreateEmployee/>
    </div>
  );
}

export default App;
