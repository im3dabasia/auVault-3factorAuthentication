import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// others
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// others
export const notify = (inputData) => toast(`${inputData} !`);

const Register = () => {
    const navigate = useNavigate()

    const RegisterSubmit = async (event) => {
        event.preventDefault();
        const { userName, email, passWord } = await event.target;
        const obj = {userName:userName.value, email: email.value, passWord: passWord.value };
        console.log(obj)

        if ((obj)) {
            const { data } = await axios.post('http://localhost:5000/api/register', obj)
                .then(function (response) {
                    console.log(response)
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });

            if (data.status === true) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.userData.email)
                );
                // navigate("/vault");
            }
            else {
                notify(data.msg);
                console.log("error")

            }
        }
        else {
              notify("Something went wrong please try again later");
            console.log("Something went wrong please try again later")
        }
    };

    return (
        <div className='bg-fixed flex flex-row justify-center items-center content-center h-full w-full'>
            <div className='bg-fixed flex flex-col justify-center items-center content-center h-full w-1/2 '>

                <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-full border-double border-4 border-indigo-600'>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2' >
                        <h1 className='font-medium leading-tight text-5xl mt-0 mb-8'>User Register </h1>
                        <form onSubmit={RegisterSubmit} >
                            <div className='flex  justify-center content-center' >
                                <div className="mb-3 xl:w-96">
                                <label forhtml="userName" className="form-label inline-block my-2 text-gray-700"
                                    >Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="userName"
                                        placeholder="Input your Name"
                                    />
                                    <label forhtml="email" className="form-label inline-block mb-2 text-gray-700"
                                    >Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                        id="email"
                                        placeholder="Input your email address here"
                                    />

                                    <label forhtml="passWord" className="form-label inline-block my-2 text-gray-700"
                                    >Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passWord"
                                        placeholder="Password input"
                                    />

                                    <div className="my-6 xl:w-96">
                                        <input
                                            type="submit"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-white
                bg-blue-500 hover:bg-blue-700 g-clip-padding border border-solid border-gray-300 rounded   m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                                            id="exampleText0"
                                            placeholder="Register"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
                <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-full border-double border-4 border-indigo-600'>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2' >
                        <h1 className='font-medium leading-tight text-5xl mt-0 mb-8'>Authenticate OTP </h1>
                        <form onSubmit={RegisterSubmit} >
                            <div className='flex  justify-center content-center' >
                                <div className="mb-3 xl:w-96">
                                    <label forhtml="OTP" className="form-label inline-block mb-2 text-gray-700"
                                    >Enter OTP Here
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                        id="OTP"
                                        placeholder="Input your OTP number here"
                                    />

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2'>
                    </div>

                </div>
            </div>

            <div className='bg-fixed flex flex-col justify-center items-center content-center h-screen w-1/2 border-double border-4 border-indigo-600' >
                voice Regognition
            </div>
      <ToastContainer />

        </div>
        


    )
}

export default Register

