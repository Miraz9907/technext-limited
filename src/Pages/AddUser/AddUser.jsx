

const AddUser = () => {
    return (
        <div className=""> 
            <h2>Add New User </h2>
            <form className="flex flex-col gap-3 justify-items-center align-middle ">
            <input type="file" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

            </form>
        </div>
    );
};

export default AddUser;