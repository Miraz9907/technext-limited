

const User = ({user}) => {
    console.log(user)
    const {image, firstName, lastName, email, address} = user;
    return (
        <div className="card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {firstName} {lastName}</h2>
    <p>Email: {email}</p>
    <p>Address- City: {address.city}, State: {address.state}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    );
};

export default User;