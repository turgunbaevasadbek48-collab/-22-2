import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/carts")
    .then((res) => setData(res.data))
    .catch(err => console.error(err))
  },[])
  return (
    <div className="app">
      <title>Hello</title>
      {data.map((item, index) => (
        <div className="container" key={item.id}>
          <h2>{item.userId}</h2>
          <br />
          <mark>{item.date}</mark>
          <div>
            <p>{item.products.productId}</p>
            <p>{item.products.quantity}</p>
          </div>
          <h3>{item.__v}</h3>
        </div>
      ))}
    </div>
  )
};

export default App;