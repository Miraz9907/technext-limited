import { useLoaderData } from "react-router-dom";


const DetailsUser = () => {
    const userDetails = useLoaderData()
    console.log(userDetails);
    const {image,firstName, lastName, email, company,address} =userDetails
    return (
        <div className="card shadow-2xl w-1/2 m-auto mt-6 flex justify-center glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body text-center">
    <h2 className="text-5xl">Name: {firstName} {lastName}</h2>
    <p>Email: {email}</p>
    <p>Company Name: {company.name}</p>
    <p>Address:- City: {address.city}, State: {address.state}</p>
    
  </div>
</div>
    );
};

export default DetailsUser;