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





const SignUpStore = () => {
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
            userType: "SELLER"
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
            navigate("/profile");
         }else if(response.data.userType=="SELLER"){
            navigate("/profile");
        }
    }



    return (
        <div className="mainSignBody">
            <div className="SignPart">
                <div className="insideSignPart">
                    <img src="https://torob.com/static/images/torob_logo.svg" ></img>
                    <p className="torobText">??????</p>
                    <div className="signUpForm">
                        <lable>??????</lable>
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }} required></input>
                        <lable>?????? ????????????</lable>
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }} required></input>
                        <lable>?????????? ????????</lable>
                        <input onChange={(e) => {
                            setphoneNumber(e.target.value);
                        }} required></input>
                        <lable>??????????</lable>
                        <input type="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required></input>
                        <lable>??????????</lable>
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
                        <button className="btn-danger" onClick={() => signUpAcc()}>?????????? ?? ??????????</button>

                        <div className="loginLink">
                            <Link className="loginParagraph" to="/login">
                                <p>????????</p>
                            </Link>
                            ???????? ?????? ?????? ???????? ????????
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpStore;