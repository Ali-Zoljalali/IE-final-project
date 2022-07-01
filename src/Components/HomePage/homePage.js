import { useNavigate, Link } from "react-router-dom";
import "./homePage.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown
} from 'react-bootstrap';
import { useState } from "react"





const Home = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mainHomeBody">
            <div className="navbar">
                <button className="signInButton" onClick={() => navigate("/signup")}>ثبت نام / ورود</button>

                {/* <div className="paragraphPart"> */}
                {/* <Modal show={show} onHide={handleClose} className="signInPage">
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer> */}
                {/* </Modal> */}
                {/* <button className="Laptop" onClick={handleShow}>لپ تاپ</button>
                    <button className="Mobile" onClick={handleShow}>موبایل</button>
                    <button className="Tablet" onClick={handleShow}>تبلت</button> */}
                {/* </div> */}


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

            <div className="searchPart">
                <div className="topSearchPart">
                    <img className="torobImg" src={torobPic}></img>
                    <div className="searchBox">
                        <input className="search" placeholder="نام کالا را وارد کنید  "></input>
                        <img className="searchImg" src={searchPic}></img>
                        {/* <Button onClick={handleShow}>
                            Launch demo modal
                        </Button> */}



                    </div>
                </div>
            </div>
        </div >

        // <div className="mainHomeBody">
        //     <Navbar expand="md" className="">

        //         <div className="row">
        //             <Button className=" btn-secondary my-1" size="sm">ثبت نام / ورود</Button>
        //             <Container >
        //                 <Nav variant="tabs" defaultActiveKey="/home">
        //                     <NavDropdown title="موبایل" className="me-5">
        //                         <NavDropdown.Item>
        //                             <Link className="nav-link" to="/mobiles">
        //                                 گوشی موبایل
        //                             </Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="nav-link" to="/mobiles/samsung">
        //                                 گوشی سامسونگ
        //                             </Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="nav-link" to="/mobiles/xiaomi">
        //                                 گوشی شیائومی
        //                             </Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="nav-link" to="/mobiles/apple">
        //                                 گوشی اپل
        //                             </Link>
        //                         </NavDropdown.Item>
        //                     </NavDropdown>
        //                 </Nav>
        //             </Container>
        //         </div>

        //     </Navbar>
        // </div>

    )
}

export default Home;