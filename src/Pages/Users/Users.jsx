import { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUsers] = useState([]);

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
    return (
        <div>

        <div className="flex justify-between p-10">
            <input onChange={onSearch} type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />

        <select className="select select-bordered w-full max-w-xs">
            <option disabled value="Sort by name">Sort by name</option>
            <option>Sort by email defau</option>
            <option>Sort by Company name</option>
        </select>
        </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
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