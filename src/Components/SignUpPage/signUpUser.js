import { useNavigate, Link } from "react-router-dom";
import "./signUpPage.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import eyeImg from "../../eye.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Form
} from 'react-bootstrap';
import { useState,useEffect } from "react"
import { ReactPasswordChecklistProps } from "react-password-checklist";
import axios from "axios"





const SignUpUser = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");
    console.log(name);
    console.log(username);
    console.log(phoneNumber);
    console.log(email);
    console.log(password);

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const signUpAcc = () => {
        let user={
            username: username,
            name: name,
            phoneNumber: phoneNumber,
            password : password,
            email: email,
            userType: "BUYER"
        }
        //  console.log(user);
        axios.post('http://ie-final-project.herokuapp.com/user/signup',user)
        .then((res)=>{
            console.log(res)
            setResponse(res)
            checkUserType()
        },(error)=>{
             console.log(error)
        });

    }

    const [first, setFirst] = useState(true);
    useEffect(() => {
        if (!first) {
            checkUserType()
        }
        setFirst(false);
    }, [response]);

    const checkUserType = ()=>{
        //console.log("responsellllllllllllllllllllllllllll")
        //console.log(response)
        if(response.data.userType=="BUYER"){
            navigate("user/profile");
         }else if(response.data.userType=="SELLER"){
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
                        <lable>نام</lable>
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }} required></input>
                        <lable>نام کاربری</lable>
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }} required></input>
                        <lable>شماره تلفن</lable>
                        <input onChange={(e) => {
                            setphoneNumber(e.target.value);
                        }} required></input>
                        <lable>ایمیل</lable>
                        <input type="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required></input>
                        <lable>پسورد</lable>
                        <div className="password">
                            <img src={eyeImg} onClick={togglePassword}></img>
                            <input
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                            ></input>

                        </div>
                        <button className="btn-danger" onClick={() => signUpAcc()}>تایید و ارسال</button>

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