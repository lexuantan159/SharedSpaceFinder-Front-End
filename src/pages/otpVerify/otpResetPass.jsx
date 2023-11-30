import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import * as authService from "../../services/auth";
import MethodContext from "../../context/methodProvider";

const OtpResetPass = () => {
    const [hiddenPassword, setHiddenPassword] = useState(true)
    const [hiddenRePassword, setHiddenRePassword] = useState(true)
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [numberOne, setNumberOne] = useState("")
    const [numberTwo, setNumberTwo] = useState("")
    const [numberThree, setNumberThree] = useState("")
    const [numberFour, setNumberFour] = useState("")
    const [numberFive, setNumberFive] = useState("")
    const [numberSix, setNumberSix] = useState("")
    const [email, setEmail] = useState("email@gmail.com")
    const location = useLocation();
    const navigate = useNavigate();
    const {notify, toastLoadingId, toastUpdateLoadingId} = useContext(MethodContext);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (location.state?.toastMessage !== '') {
            toast.update(location.state?.id, {
                render: location.state?.toastMessage,
                type: location.state?.statusMessage,
                isLoading: false,
                autoClose: true,
                closeButton: "close"
            });
            navigate(location.pathname, {replace: true, state: {}});
        }

        const emailLocal = localStorage.getItem("email")
        if (emailLocal != null) {
            const emailParse = JSON.parse(emailLocal)
            setEmail(emailParse.email)
        } else {
            notify("Vui lòng nhấn gửi lại mã OTP!", "error")
        }
    }, []);

    const validationPassword = (oldPass, newPass) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        // Use a regular expression to enforce password strength rules
        const isStrong = passwordRegex.test(password)
        if (!isStrong) {
            notify("Mật khẩu ít nhất 6 ký tự và bao gồm chữ in hoa, chữ thường, và số!", "error")
            return false;
        }
        if (oldPass !== newPass) {
            notify("Mật khẩu không trùng khớp, vui lòng nhập lại!", "error");
            return false;
        }
        return true;

    }

    const validationOTP = () => {
        if (numberOne === "" || numberTwo === "" || numberThree === "" || numberFour === "" || numberFive === "" || numberSix === "")
            notify("OTP phải đủ 6 số!", "error");
    }

    const handleResendOTP = async (e) => {
        e.preventDefault();
        const id = toastLoadingId("Vui lòng chờ...")
        setIsLoading(true)
        // fetch register
        const registerResponse = await authService.forgotPassword(email)
        // check output and display error if has error
        if (registerResponse?.status === 200)
            toastUpdateLoadingId("Gửi OTP thành công!", "success", id)
        else
            toastUpdateLoadingId("Gửi OTP thất bại!", "error", id)
        setIsLoading(false)
    }
    const handleResetPass = async (e) => {
        e.preventDefault();
        // validate input
        validationOTP()
        if (validationPassword(password, rePassword)) {
            // handle call api
            const otpString = numberOne + numberTwo + numberThree + numberFour + numberFive + numberSix
            const responseResetPass = await authService.resetPass(password, otpString, email)
            if (responseResetPass?.status === 200) {
                // remove data from local storage
                localStorage.removeItem("email")
                // link to login page
                navigate('/login', {state: {toastMessage: "Thay đổi mật khẩu thành công!", statusMessage: "success"}})
            } else {
                console.log(responseResetPass)
                if (responseResetPass?.response?.status === 400) {
                    notify("OTP hết hạn, hoặc không chính xác!", "error")
                } else
                    notify("Thay đổi mật khẩu thất bại!", "error")
            }
        }
    }


    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Xác thực OTP</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>Chúng tôi sẽ gửi mã xác nhận đến mail của bạn {email}</p>
                        </div>
                    </div>

                    <div>
                        <form action="" method="post">
                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-row items-center justify-between mx-auto w-full">
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberOne}
                                            onChange={(e) => setNumberOne(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberTwo}
                                            onChange={(e) => setNumberTwo(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberThree}
                                            onChange={(e) => setNumberThree(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberFour}
                                            onChange={(e) => setNumberFour(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberFive}
                                            onChange={(e) => setNumberFive(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            value={numberSix}
                                            onChange={(e) => setNumberSix(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="relative w-full mb-4">
                                        <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                               htmlFor="inputPassword">Mật Khẩu</label>
                                        <div className="w-full">
                                            <input
                                                className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                                id="inputPassword"
                                                type={hiddenPassword ? "password" : "text"}
                                                placeholder="Mật khẩu"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                max={15}
                                            />

                                            {
                                                hiddenPassword ?
                                                    <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)}
                                                                     icon={faEyeSlash}
                                                                     className="absolute bottom-4 right-4 hover:cursor-pointer"/> :
                                                    <FontAwesomeIcon onClick={() => setHiddenPassword(!hiddenPassword)}
                                                                     icon={faEye}
                                                                     className="absolute bottom-4 right-4 hover:cursor-pointer"/>
                                            }
                                        </div>
                                    </div>
                                    <div className="relative w-full mb-4">
                                        <label className="block text-[18px] font-bold text-textBoldColor mb-2"
                                               htmlFor="inputRePassword">Nhập Lại Mật Khẩu</label>
                                        <div className="w-full">
                                            <input
                                                className="block w-full pl-4 pr-10 py-3 shadow rounded-xl outline-none"
                                                id="inputRePassword"
                                                type={hiddenRePassword ? "password" : "text"}
                                                placeholder="Nhập lại mật khẩu"
                                                required
                                                value={rePassword}
                                                onChange={(e) => setRePassword(e.target.value)}
                                                max={15}
                                            />

                                            {
                                                hiddenRePassword ?
                                                    <FontAwesomeIcon
                                                        onClick={() => setHiddenRePassword(!hiddenRePassword)}
                                                        icon={faEyeSlash}
                                                        className="absolute bottom-4 right-4 hover:cursor-pointer"/> :
                                                    <FontAwesomeIcon
                                                        onClick={() => setHiddenRePassword(!hiddenRePassword)}
                                                        icon={faEye}
                                                        className="absolute bottom-4 right-4 hover:cursor-pointer"/>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            onClick={(e) => handleResetPass(e)}
                                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-lg shadow-sm font-bold">
                                            {isLoading ? "Đang xác nhận..." : "Xác nhận"}
                                        </button>
                                    </div>

                                    <div
                                        className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Không nhận được mã code?</p> <p
                                        className="flex flex-row items-center text-blue-600 hover:cursor-pointer"
                                        onClick={(e) => handleResendOTP(e)}>Gửi lại</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpResetPass