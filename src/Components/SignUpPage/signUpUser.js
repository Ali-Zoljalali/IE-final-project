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





const SignUpUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(name);
    console.log(username);
    console.log(phoneNumber);
    console.log(email);
    console.log(password);

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    //     navigate("/profile");
    // }

    return (
        <div className="mainSignBody">
            <div className="SignPart">
                <div className="insideSignPart">
                    <img src="https://torob.com/static/images/torob_logo.svg" ></img>
                    <p className="torobText">ترب</p>
                    <div className="signUpForm">
                        <lable>نام</lable>
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }}></input>
                        <lable>نام کاربری</lable>
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }}></input>
                        <lable>شماره تلفن</lable>
                        <input onChange={(e) => {
                            setphoneNumber(e.target.value);
                        }}></input>
                        <lable>ایمیل</lable>
                        <input type="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                        <lable>پسورد</lable>
                        <div className="password">
                            <img src={eyeImg} onClick={togglePassword}></img>
                            <input type={showPassword ? "text" : "password"} onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        </div>
                        <button className="btn-danger">تایید و ارسال</button>

                        <div className="loginLink">
                            <Link className="loginParagraph" to="/login">
                                <p>ورود</p>
                            </Link>
                            قبلا ثبت نام کرده اید؟
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpUser;