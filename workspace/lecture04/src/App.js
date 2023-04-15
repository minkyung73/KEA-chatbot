// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  useEffect(()=>{
    // id: 1 출력
    Axios.post("/api/users").then((response)=>{
      console.log(response.data);
      if(response.data){
        setUser(response.data);
      }else{
        alert("failed to");
      }
    });

    // id: 2 출력
    Axios.get("/api/getuser").then((response)=>{
      if(response.data){
        console.log(response.data);
        setUser(response.data);
      }else{
        alert("failed to");
      }
    });
  }, []);



  return (
    <div className="App">
      <div align='left' style={{margin: '20px'}}>
        <h2>GCU React-Spring Integration</h2>
        ID: {user.id} <br/>
        Name: {user.name} <br/>
        Date: {user.dob} <br/>
      </div>
    </div>
  );
}

export default App;
