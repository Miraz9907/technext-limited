import { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUsers] = useState([]);

    useEffect( ()=>{
        const url = 'https://dummyjson.com/users';

        fetch(url)
        .then(res => res.json())
        .then(data=> setUsers(data.users))
    },[]);

    // const onSearch = (e) =>{
    //     const field = e.target.value;
    //     console.log(field)
    // }

    console.log(searchUser);
    return (
        <div>

        <div className="flex justify-between p-10">
            <input onChange={setSearchUsers} type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />

        <select className="select select-bordered w-full max-w-xs">
            <option disabled value="Sort by name">Sort by name</option>
            <option>Sort by email defau</option>
            <option>Sort by Company name</option>
        </select>
        </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
                {
                    users.map(user=> <User
                    key={user.id}
                    user= {user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;