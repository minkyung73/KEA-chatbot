// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.post("/api/users").then((response) => {
      if(response.data){
        setUser(response.data);
      }else{
        alert("failed to");
      }
    });
  }, []);

  return (
    <div className="App">
      <div align="left" style={{margin:'20px'}}>
        <h2>Car Information</h2>
        ID: {user.id} <br/>
        Brand: {user.name} <br/>
        Company: {user.company} <br/>
        Price: {user.price} <br/>
      </div>
    </div>
  );
}

export default App;
