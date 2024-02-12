

const AddUser = () => {

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const avatar = form.avatar.value;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const address = form.address.value;
        const companyName = form.company.value;

        console.log(avatar,firstName,lastName,email,address,companyName)
    }
    return (
        <div className="mt-16"> 
            <h2 className="text-3xl text-center">Add New User </h2>
            

    <form onSubmit={handleSignup} className="card-body lg:w-1/2 m-auto">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <input
                  type="file"
                  name='avatar'
                  accept=".jpg, .jpeg .png" 
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name='firstname'
                  placeholder="First name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name='lastname'
                  placeholder="Last name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name='address'
                  placeholder="address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  name='company'
                  placeholder="Company Name"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add User"
                />
              </div>
            </form>
        </div>
    );
};

export default AddUser;