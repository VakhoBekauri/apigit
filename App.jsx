// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (query) => {
    if (!query) return;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    setUsers(response.data.items);
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchUsers} />
      <UserList users={users} />
    </div>
  );
};

export default App;
