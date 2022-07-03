import { useNavigate, Link } from "react-router-dom";
import "./profile.css";
import profileImg from "../../profile.png"
import searchPic from "../../search.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Form, Accordion
} from 'react-bootstrap';
import { useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";




const UserProfile = () => {
    const dispatch = useDispatch();
    const onlineUser=useSelector((state)=> state.torob.onlineUser.payload)
    const navigate = useNavigate();
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    // console.log(newName)
    // console.log(newEmail)
    // console.log(newPhoneNumber)


    // const [response, setResponse] = useState("");
    // const togglePassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // const signUpAcc = () => {
    //     let user = {
    //         username: username,
    //         password: password
    //     }
    //     console.log(user);
    //     axios.post('http://ie-final-project.herokuapp.com/auth/login', user)
    //         .then((res) => {
    //             console.log(res)
    //             setResponse(res)
    //         }, (error) => {
    //             console.log(error)
    //         });

    // }
    // const checkUserType = () => {
    //     if ("BUYER" == "BUYER") {
    //         navigate("user/profile");
    //     }//else if(userType=="SELLER"){
    //     //     navigate("store/profile");
    //     // }
    // }

    const changeProfile = () => {
        console.log("helloUser")
    }


    return (
        <div className="userProfileBody">

            <div className="productsNavbar">
                <div className="productsNavbarTop">
                    <button className="signInButton" onClick={() => navigate("/")}>خروج</button>
                    <div className="productsSearchBox">
                        <img className="productsSearchImg" src={searchPic}></img>
                        <input className="productsSearchBoxInput"
                            placeholder="نام کالای خود را وارد کنید"></input>
                        <p>ترب</p>
                        <img className="productsTorobImg" src="https://torob.com/static/images/torob_logo.svg"></img>
                    </div>
                </div>
                <div className="productsNavbarbottom">
                    <div className="paragraphPart">
                        <NavDropdown title="لپ تاپ">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/laptops">
                                    لپ تاپ
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/laptops/lenovo">
                                    لنوو
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/laptops/asus">
                                    ایسوس
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/laptops/apple">
                                    اپل
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="تبلت" className="">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/tablets">
                                    تبلت
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/tablets/samsung">
                                    سامسونگ
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/tablets/xiaomi">
                                    شیائومی
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/tablets/apple">
                                    اپل
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="موبایل" className="">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/mobiles">
                                    گوشی موبایل
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/mobiles/samsung">
                                    سامسونگ
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/mobiles/xiaomi">
                                    شیائومی
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/mobiles/apple">
                                    اپل
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>

            <div className="mainUserBody">

                <div className="topProfileDetails">

                    <div className="topProfDetLeft">
                        <img src={profileImg}></img>
                        <Button size="sm">تغییر عکس</Button>
                    </div>


                    <div className="topProfDetRight">
                        <div className="UserInfo">
                            <lable>{onlineUser.username} : نام کاربری</lable>
                            <lable>{onlineUser.name} : نام</lable>
                            <lable>شماره تماس : {onlineUser.phoneNumber} </lable>
                            <lable>{onlineUser.email} : ایمیل</lable>
                        </div>

                        <div className="UpdateInfo">
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="customizeAccord">ویرایش اطلاعات</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="changeInfo">
                                            <div>
                                                <input placeholder="نام خود را وارد کنید"
                                                    onChange={(e) => {
                                                        setNewName(e.target.value)
                                                    }}></input>
                                                <label>: تغییر نام </label>
                                            </div>
                                            <div>
                                                <input placeholder="ایمیل جدید را وارد کنید"
                                                    onChange={(e) => {
                                                        setNewEmail(e.target.value)
                                                    }}></input>
                                                <label>: تغییر ایمیل </label>
                                            </div>
                                            <div>
                                                <input placeholder="شماره جدید را وارد کنید"
                                                    onChange={(e) => {
                                                        setNewPhoneNumber(e.target.value)
                                                    }}></input>
                                                <label>: تغییر شماره موبایل</label>
                                            </div>
                                            <Button className="btn-danger" onClick={() => changeProfile()}>تایید</Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>


            <div className="wishListPart">

            </div>


        </div>
        </div >
    )
}

export default UserProfile;