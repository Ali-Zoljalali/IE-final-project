import { useNavigate, Link } from "react-router-dom";
import "./signUpPage.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Form
} from 'react-bootstrap';
import { useState } from "react"





const SignUp = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(email);
        navigate("/profile");
    }
    return (
        <div className="mainSignBody">
            {/* <>
                <div className="signup-bg d-flex justify-content-center align-items-center">
                    <div className="signup rounded py-5 d-flex flex-column justify-content-center align-items-center ">
                        <div
                            className="torob-logo d-flex align-items-center"
                            onClick={() => navigate("/")}
                        >
                            <img
                                src="https://torob.com/static/images/torob_logo.svg"
                                alt="torob-logo"
                                style={{ width: "35px", height: "35px" }}
                                className="ms-2"
                            />
                            <h2 className="text-danger ms-3 fs-1">ترب</h2>
                        </div>
                        <Form
                            className=" py-5 d-flex flex-column justify-content-center align-items-center"
                            onSubmit={onSubmitForm}
                        >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ایمیل را وارد کنید"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="کلمه عبور را وارد کنید"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    className="ms-2 mt-2"
                                    type="checkbox"
                                    onClick={(e) => {
                                        e.target.checked
                                            ? setShowPassword(true)
                                            : setShowPassword(false);
                                    }}
                                    name="showPass"
                                />
                                <label htmlFor="showPass">نمایش رمز عبور</label>
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                ورود
                            </Button>
                            <div className="d-flex mt-4">
                                <p> ثبت نام نکرده اید؟</p>
                                <Link className="me-2 link-login" to="/signup">
                                    عضویت{" "}
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </> */}

            {/* <>
                <div className="signup-bg d-flex justify-content-center align-items-center">
                    <div className="signup rounded py-5 d-flex flex-column justify-content-center align-items-center ">
                        <div
                            className="torob-logo d-flex align-items-center"
                            onClick={() => navigate("/")}
                        >
                            <img
                                src="https://torob.com/static/images/torob_logo.svg"
                                alt="torob-logo"
                                style={{ width: "35px", height: "35px" }}
                                className="ms-2"
                            />
                            <h2 className="text-danger ms-3 fs-1">ترب</h2>
                        </div>
                        <Form
                            className=" py-5 d-flex flex-column justify-content-center align-items-center"
                            onSubmit={onSubmitForm}
                        >
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>نام کاربری</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="نام کاربری را وارد کنید"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ایمیل را وارد کنید"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="کلمه عبور را وارد کنید"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />{" "}
                                <input
                                    className="ms-2 mt-2"
                                    type="checkbox"
                                    onClick={(e) => {
                                        e.target.checked
                                            ? setShowPassword(true)
                                            : setShowPassword(false);
                                    }}
                                    name="showPass"
                                />
                                <label htmlFor="showPass">نمایش رمز عبور</label>
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                ثبت نام
                            </Button>
                            <div className="d-flex mt-4">
                                <p>قبلا ثبت نام کرده اید؟</p>
                                <Link className="me-2 link-login" to="/login">
                                    ورود
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </> */}

            <div className="SignPart">
                <div className="insideSignPart">
                    <img src="https://torob.com/static/images/torob_logo.svg" ></img>
                    <p className="torobText">ترب</p>

                    <button className="btn-primary" onClick={() => navigate("/signup/user")}>ثبت نام به عنوان کاربر</button>
                    <button className="btn-primary" onClick={() => navigate("/signup/store")}>ثبت نام به عنوان فروشگاه</button>
                    <p>
                        قبلا ثبت نام کرده اید؟
                        <Link className="loginParagraph" to="/login">
                            <p>ورود</p>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;