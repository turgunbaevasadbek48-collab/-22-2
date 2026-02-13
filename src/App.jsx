import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setData(res.data))
    .catch(err => console.error(err))
  },[])
  return (
    <div className="app">
      {data.map((item, index) => (
        <div className="container" key={item.id}>
          <h2>{item.name}</h2>
          <div>
            <h3>{item.username}</h3>
            <mark>{item.email}</mark>
          </div>
          <div>
            <p>{item.address.street}</p>
            <p>{item.phone}</p>
          </div>
          <h3>{item.website}</h3>
          <p>{item.company.name}</p>
        </div>
      ))}
    </div>
  )
};

export default App;