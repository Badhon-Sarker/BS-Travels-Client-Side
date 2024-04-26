import { NavLink, useNavigate  } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [eye, setEye] = useState(false);
  const [passErr, setPassErr] = useState([]);
  const navigate = useNavigate()

  const { registerUser } = useContext(AuthContext);

  const handleEye = () => {
    setEye(!eye);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const name = data.registerName;
    const email = data.registerEmail;
    const photo = data.registerPhoto;
    const password = data.registerPass;

    if (password.length < 6) {
      setPassErr("");
      return setPassErr("Password must have 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      setPassErr("");
      return setPassErr("Password must have Uppercase");
    }

    if (!/[a-z]/.test(password)) {
      setPassErr("");
      return setPassErr("Password must have Lowercase");
    }

    registerUser(email, password)
      .then((result) => {
        toast.success('Successfully Registered')
        navigate('/')
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-register-bg ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white mt-10 font-playfair">
            Register now!
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blue-400 my-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                {...register("registerName", { required: true })}
              />
              {errors.registerName?.type === "required" && (
                <p>Name is required</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                {...register("registerEmail", { required: true })}
              />
              {errors.registerEmail?.type === "required" && (
                <p>Email is required</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("registerPhoto")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Your password"
                  className="input input-bordered w-full"
                  {...register("registerPass", { required: true })}
                />

                <div
                  onClick={handleEye}
                  className="absolute ml-52 text-gray-500 -mt-8"
                >
                  {eye ? <IoEye /> : <IoMdEyeOff />}
                </div>

                {errors.registerPass?.type === "required" && (
                  <p>Password is required</p>
                )}
              </div>
              {passErr && <p>{passErr}</p>}

              <div className="flex justify-center gap-1 text-sm text-white font-playfair my-3">
                <p>Already have an account?</p>{" "}
                <NavLink to={"/login"}>Login</NavLink>
              </div>
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-blue-700 text-white ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
