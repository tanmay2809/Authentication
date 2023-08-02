
import React, {  useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
//import { useNavigate } from "react-router-dom";
//import axios from "axios";


const Signup = () => {
     const [formData, setFormData] = useState({
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       confirmPassword: "",
     });

     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

     function changeHandler(event) {
       setFormData((prevData) => ({
         ...prevData,
         [event.target.name]: event.target.value,
       }));
     }
     function reset (){
        setFormData({
          firstName: " ",
          lastName: "",
          email: "",
          password: " ",
          confirmPassword: "",
        });
     }

     function submitHandler(event) {
       event.preventDefault();
       if (formData.password !== formData.confirmPassword) {
         toast.error("Passwords do not match");
         return;
       }
       
       console.log(formData);
       reset();
       toast.success("Account Created");

       
       
    //    axios
    //      .post("api/v1/auth/signup", { accountData })
    //      .then((res) => {
    //        console.log(res);
    //      })
    //      .catch((err) => {
    //        console.log(err);
    //      });

       // navigate("/dashboard");
     }
  return (
    <div>
      
        
        <div className=" max-w-[25rem]  pt-[10rem] flex flex-col mx-auto items-center justify-center">
            <div className="text-center ">
                <h1>signup</h1>
            </div>
          <form
            onSubmit={submitHandler}
           
          >
            <div className="flex gap-x-4 mt-[20px]">
              <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  First Name<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  className="bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
              <br />

              <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Last Name<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  onChange={changeHandler}
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
            </div>

            {/* email Add */}
            <div className="mt-[20px]">
              <label className=" mt-[20px]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  placeholder="Enter Email Address "
                  value={formData.email}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
              </label>
            </div>

            {/* createPassword and Confirm Password */}
            <div className="w-full flex gap-x-4 mt-[20px]">
              <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Create Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                  className="bg-richblack-800 rounded-[0.5rem] text-red-200 w-full p-[12px]"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>

              <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Confirm Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>
            <button className=" items-center w-[11rem] bg-yellow-50 rounded-lg font-medium text-black px-[12px] py-[8px] mt-6">
              Create Account
            </button>
          </form>
        </div>
      </div>
    
  );
}

export default Signup