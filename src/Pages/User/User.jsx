import { Link } from "react-router-dom";


const User = ({user}) => {
    // console.log(user);
    const {id, image, firstName, lastName, email, address, company} = user;
    return (
        <div className="card w-96 glass shadow-2xl">
  <figure><img className="p-2" src={image} alt="car!"/></figure>
  <div className="card-body">
    <Link to={`/detailsUsers/${id}`}><h2 className="text-2xl card-title">Name: {firstName} {lastName}</h2></Link>
    <p>Email: {email}</p>
    <p>Company Name: {company.name}</p>
    <p>Address:- City: {address.city}, State: {address.state}</p>
    
  </div>
</div>
    );
};

export default User;