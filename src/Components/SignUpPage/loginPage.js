import { useNavigate, Link } from "react-router-dom";
import "./signUpPage.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import eyeImg from "../../eye.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Form
} from 'react-bootstrap';
import { useState } from "react"





const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setShowPassword(!showPassword);
    };
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
                        <input></input>
                        {/* <lable>شماره تلفن</lable>
                        <input></input> */}
                        {/* <lable>ایمیل</lable>
                        <input></input> */}
                        <lable>پسورد</lable>
                        <div className="password">
                            <img src={eyeImg} onClick={togglePassword}></img>
                            <input type={showPassword ? "text" : "password"} className="in1"></input>
                        </div>
                        <button className="btn-danger">تایید و ارسال</button>

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