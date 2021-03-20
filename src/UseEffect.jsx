import { useState, useEffect } from "react";
import "./useEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="cards">
      {users.map((user, i) => (
        <div key={i} className="card">
          <div className="tophalf">
            <div className="yellow"></div>
            <h5 className="name">{user.name}</h5>
            <hr />
          </div>

          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Phone Number: {user.phone}</p>
          <p>Website: {user.website}</p>

          <div className="bottomdots"></div>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
