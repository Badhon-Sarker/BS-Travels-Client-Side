import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                  
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>

            <div>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <form>
//         <h1>Log In</h1>
//         <div className=" border-2">
//           <input type="email" name="email" placeholder="Email" id="" />
//         </div>

//         <div className="border-2">
//           <input type="password" name="password" placeholder="Password" id="" />
//         </div>

//         <div>
//             <label><input type="checkbox" name="" id="" />Remember me</label>
//             <a>Forgot password?</a>

//       </div>
//       <div>
//         <button className="btn">Log In</button>
//       </div>

//       <div>
//         <p>Dont have an account?</p> <NavLink><p>Register</p></NavLink>
//       </div>
//       </form>
