import { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUsers] = useState([]);
    const [sortBy, setSortBy] = useState('');
    useEffect( ()=>{
        const url = 'https://dummyjson.com/users';
        fetch(url)
        .then(res => res.json())
        .then(data=> {
            setUsers(data.users)
            setSearchUsers(data.users)
        })
        .catch(err => console.log(err));
    },[]);

    const onSearch = (e) =>{
        setSearchUsers(users.filter(user => user.username.toLowerCase().includes(e.target.value)))
    }

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortBy(selectedSort);
        sortUsers(selectedSort);
      };
      const sortUsers = (sortKey) => {
        const sortedUsers = [...users].sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          if (a[sortKey] > b[sortKey]) return 1;
          return 0;
        });
    
        setSearchUsers(sortedUsers);
      };

    return (
        <div>
        <div className="sm:flex-col md:flex-row sm:m-auto p-10">
            <input onChange={onSearch} type="text" placeholder="Search here" className="input input-bordered input-primary w-full m-4 max-w-xs" />

            <label htmlFor="sortSelect">Sort By:</label>
            <select id="sortSelect" value={sortBy} onChange={handleSortChange} className="select select-bordered w-full m-4 max-w-xs">
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="companyName">Company Name</option>
            </select>
        </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 '>
                {
                    searchUser.map(user=> <User
                    key={user.id}
                    user= {user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;