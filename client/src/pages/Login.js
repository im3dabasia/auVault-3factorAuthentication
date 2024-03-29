import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundH from "../images/new-bg.gif"
import eshaanProfileImage from "../images/new-bg.gif"


// others
export const notify = (inputData) => toast(`${inputData} !`);

const Login = () => {
    const navigate = useNavigate()

    const [OneF, setOneF] = useState(false)
    const [TwoF, setTwoF] = useState(false)

    const loginSubmit = async (event) => {
        event.preventDefault();
        const { email, passWord } = await event.target;
        const obj = { email: email.value, passWord: passWord.value };

        if ((obj)) {
            const { data } = await axios.post('http://localhost:5000/api/login', obj)
                .then(function (response) {
                    // console.log(response)
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
                setOneF(true);
                notify(data.msg);

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
    const generateOTP = async (event) => {
        event.preventDefault()
        let userEmail = localStorage.getItem(
            "user",
        );
        const obj = { email: userEmail };
        console.log(userEmail)
        if ((userEmail)) {
            const { data } = await axios.post('http://localhost:5000/api/generateotp', obj)
                .then(function (response) {
                    console.log(response)
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
            if (data.status === true) {
                setTwoF(true);
                notify(data.msg);

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
    }
    const verifyOTP = async (event) => {
        event.preventDefault()
        const { otp } = await event.target;
        console.log(otp.value)
        const obj = { otp: otp.value };
        if ((obj)) {
            const { data } = await axios.post('http://localhost:5000/api/verify', obj)
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
                    JSON.stringify(data.userData)
                );
                console.log(data)
                setTwoF(true);
                notify(data.msg);
                window.location.replace("http://localhost:5173/")
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
    }
    const myStyle = {
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",

    }

    return (
        <div style={myStyle} className='bg-fixed flex flex-row justify-center items-center content-center h-full w-full'>
            <div className={`${OneF ? '' : ' cursor-not-allowed'}   bg-fixed flex flex-col justify-center items-center content-center h-screen  border-double border-8 border-red-900 text-white text-7xl`} >


            </div>
            <div className='bg-fixed flex flex-row justify-center items-center content-center h-full w-1/2 '>

                <div className={` ${OneF ? 'bg-green-800' : 'bg-green-900'} bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-full border-double border-8 border-red-600`}>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2' >
                        <h1 className='font-medium leading-tight text-5xl mt-0 mb-8 text-neutral-50 w-full'> Login </h1>
                        <form onSubmit={loginSubmit} >
                            <div className='flex  justify-center content-center'>
                                <div className="mb-3 xl:w-96">
                                    <label forhtml="email" className="form-label inline-block mb-2 text-neutral-50"
                                    >Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                        id="email"
                                        placeholder="Input your email address here"
                                    />

                                    <label forhtml="passWord" className="form-label inline-block my-2 text-neutral-50"
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
                bg-green-500 hover:bg-green-700 g-clip-padding border border-solid border-gray-300 rounded   m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                                            id="exampleText0"
                                            placeholder="Login"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className={`${OneF ? 'bg-zinc-800' : 'bg-red-700'} ${OneF ? '' : ' cursor-not-allowed'} my-10 bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-full border-double border-8 border-red-800 ${OneF ? 'blur-none ' : 'blur-sm'} `}>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2' >
                        <h1 className='font-medium leading-tight text-5xl mt-0 mb-8 text-white'>Enter OTP </h1>
                        <form onSubmit={verifyOTP}>
                            <div className='flex  justify-center content-center' >
                                <div className="mb-3 xl:w-96">
                                    <div>
                                        <label forhtml="otp" className={`form-label text-white inline-block mb-2  text-gray-700'`}
                                        >Enter OTP Here
                                        </label>

                                    </div>
                                    <input
                                        type="text"
                                        className={`form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700
                                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none   ${OneF ? '' : ' cursor-not-allowed'} `}
                                        id="otp"
                                        placeholder="Input your OTP number here"
                                    />
                                    <div className="mt-2 ">
                                        <button class={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded mt-4 w-1/3 mx-2 ${OneF ? '' : ' cursor-not-allowed'}`} onClick={generateOTP}>
                                            Generate OTP
                                        </button>
                                        <div className="my-6 xl:w-96">
                                            <input
                                                type="submit"
                                                className={`form-control block w-full px-3 py-1.5 text-base font-normal text-white
                bg-green-500 hover:bg-green-700 g-clip-padding border border-solid border-gray-300 rounded   m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ${OneF ? '' : ' cursor-not-allowed'}`}
                                                id="exampleText3"
                                                placeholder="Login"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='bg-fixed flex flex-col justify-center items-center content-center h-1/2 w-1/2'>
                    </div>

                </div>
            </div>

            <div className={`${OneF ? '' : ' cursor-not-allowed'}   bg-fixed flex flex-col justify-center items-center content-center h-screen  border-double border-8 border-red-900 text-white text-7xl`} >


            </div>
            <ToastContainer />

        </div>


    )
}

export default Login

