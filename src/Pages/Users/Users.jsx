import { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
        const url = 'https://dummyjson.com/users';

        fetch(url)
        .then(res => res.json())
        .then(data=> setUsers(data.users))
    },[])
    return (
        <div>
            
            <div>
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