const AddUser = () => {
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const city = form.city.value;
        const state = form.state.value;
        const name = form.name.value;

        const user = {
            image,
            firstName,
            lastName,
            email,
            address:{
                city,
                state
            },
            company:{
                name,
            }
        }
        console.log(user)
        form.reset();

        localStorage.setItem('userData', JSON.stringify(user));
    }
    let data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);

    return (
        <div className="mt-16">
            <h2 className="text-3xl text-center font-semibold my-3">Add New User </h2>
            
    <form onSubmit={handleSignup} className="card-body lg:w-1/2 m-auto border rounded-xl shadow-2xl">
            <div className="form-control">
                <label className="label">
                <span className="label-text">Avatar</span>
                </label>
                <input
                type="url"
                  name='image'
                  accept=".jpg, .jpeg .png" 
                  className="input input-bordered"
                  placeholder="Please give your image url here"
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
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  name='city'
                  placeholder="city"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">State</span>
                </label>
                <input
                  type="text"
                  name='state'
                  placeholder="state"
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
                  name='name'
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