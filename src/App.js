import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [userList, setuserList] = useState([]);

  async function getUsers() {
    return await axios.get("https://randomuser.me/api")
      .then((response) => setuserList(response.data.results))
      .catch((error) => console.log(error, "error"))
  }

  useEffect(() => {
    getUsers();
  }, [])


  window.localStorage.setItem("userList", JSON.stringify(userList));

  return (
    <div className="App">
      <h1 className='headingStyle'>Welcome to User App</h1>
      <div className='cardStyle'>
      {
        userList?.map((data, index) => (
          <div className='textStyle' key={index}>
            <p >Name  : {data.name.title}.{data.name.first}{data.name.last}</p>
            <p >Email : {data.email}</p>
          </div>
        ))
      }
      </div>
      <h3 className='headingStyle'>Click on refresh button to get new user details</h3>
      <button className='buttonStyle' onClick={() => getUsers()}>Refresh</button>
    </div>
  );
}

export default App;
