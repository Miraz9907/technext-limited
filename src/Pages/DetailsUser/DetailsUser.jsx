import { useLoaderData } from "react-router-dom";


const DetailsUser = () => {
    const userDetails = useLoaderData()
    console.log(userDetails);
    const {image,firstName, lastName, email, company,address} =userDetails
    return (
        <div className="card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {firstName} {lastName}</h2>
    <p>Email: {email}</p>
    <p>Company Name: {company.name}</p>
    <p>Address- City: {address.city}, State: {address.state}</p>
    
  </div>
</div>
    );
};

export default DetailsUser;