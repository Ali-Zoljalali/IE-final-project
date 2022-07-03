import { useNavigate, Link } from "react-router-dom";
import "./signUpPage.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import eyeImg from "../../eye.png"
import { useDispatch, useSelector } from "react-redux"
import { setOnlineUser } from "../../Redux/reducers";
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Form
} from 'react-bootstrap';
import { useState, useEffect } from "react"
import axios from "axios";






const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const signUpAcc = () => {
        let user = {
            username: username,
            password: password
        }
        //  console.log(user);
        axios.post('http://ie-final-project.herokuapp.com/auth/login', user)
            .then((res) => {
                console.log(res)
                setResponse(res)
                if (res.status == 201) {
                    dispatch(setOnlineUser(res.data.user))

                } else {
                    // setError(res.data.message)
                    alert(res.data.message)
                }
            }, (e) => {
                //console.log(e)
            });

    }
    const [first, setFirst] = useState(true);
    useEffect(() => {
        if (!first) {
            checkUserType()
        }
        setFirst(false);
    }, [response]);



    const checkUserType = () => {
        // console.log("responsellllllllllllllllllllllllllll")
        // console.log(response)
        if (response.data.user.userType == "BUYER") {
            navigate("user/profile");
        } else if (response.data.user.userType == "SELLER") {
            navigate("store/profile");
        }
    }


    return (
        <div className="mainSignBody">
            <div className="SignPart">
                <div className="insideSignPart">
                    <img src="https://torob.com/static/images/torob_logo.svg" ></img>
                    <p className="torobText">ترب</p>
                    <div className="signUpForm">
                        {/* <lable>نام</lable>
                        <input className="in1"></input> */}
                        <lable>نام کاربری</lable>
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }} required></input>
                        {/* <lable>شماره تلفن</lable>
                        <input></input> */}
                        {/* <lable>ایمیل</lable>
                        <input></input> */}
                        <lable>پسورد</lable>
                        <div className="password">
                            <img src={eyeImg} onClick={togglePassword}></img>
                            <input type={showPassword ? "text" : "password"}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required></input>
                        </div>
                        <button className="btn-danger" onClick={() => signUpAcc()}>تایید و ارسال</button>

                        <div className="loginLink">
                            <Link className="loginParagraph" to="/resetPass">
                                <p>ورود</p>
                            </Link>
                            رمز عبور خود را فراموش کرده اید؟
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;