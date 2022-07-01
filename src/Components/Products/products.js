import { useNavigate, Link, useParams } from "react-router-dom";
import "./products.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Collapse
} from 'react-bootstrap';
import { useState } from "react"
import phoneImg from "../../phone.jpg";
import heart from "../../heart.png";





const Products = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // http://ie-final-project.herokuapp.com/store/get-filtered-products
    const myProductArray = window.location.pathname.split("/");
    let device = "";
    let brand = "";
    if (myProductArray.length == 2) {
        device = myProductArray[1];
    } else if (myProductArray.length == 3) {
        device = myProductArray[1];
        brand = myProductArray[2];
    }
    console.log(device + " " + brand);


    // const [open, setOpen] = useState(false);

    return (
        <div className="mainProductsBody">
            <div className="productsNavbar">
                <div className="productsNavbarTop">
                    <button className="signInButton" onClick={() => navigate("/signup")}>ثبت نام / ورود</button>
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

            <div className="ProductsBody">
                <div className="ProductsBodyLeft">
                    {/* <>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            click
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </> */}

                    <div className="filtersPartLeft">
                        <Dropdown className="costumizeDropDown">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                فیلترها
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/newest"> جدیدترین </Dropdown.Item>
                                <Dropdown.Item href="#/oldest">قدیمی ترین </Dropdown.Item>
                                <Dropdown.Item href="#/expensive">گران ترین</Dropdown.Item>
                                <Dropdown.Item href="#/chip">ارزان ترین</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="filteredProducts">
                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            {/* <img src={heart} className="wishListIcon"></img> */}
                            <i class="icon-heart-empty"></i>   

                        </div>
                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <img src={heart} className="wishListIcon"></img>
                        </div>
                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <img src={heart} className="wishListIcon"></img>
                        </div>
                    </div>
                    {/* <div className="filteredProducts">
                        <img src={phoneImg} alt="xiaomi phone"></img>
                        <h3 className="detailsPart">گوشی شیائومی</h3>
                        <p className="price">قیمت از 1.800.000</p>
                        <img src={heart} className="wishListIcon"></img>
                    </div>
                    <div className="filteredProducts">
                        <img src={phoneImg} alt="xiaomi phone"></img>
                        <h3 className="detailsPart">گوشی شیائومی</h3>
                        <p className="price">قیمت از 1.800.000</p>
                        <img src={heart} className="wishListIcon"></img>
                    </div>
                    <div className="filteredProducts">
                        <img src={phoneImg} alt="xiaomi phone"></img>
                        <h3 className="detailsPart">گوشی شیائومی</h3>
                        <p className="price">قیمت از 1.800.000</p>
                        <img src={heart} className="wishListIcon"></img>
                    </div> */}





                </div>


                <div className="ProductsBodyRight">
                    right
                </div>
            </div>



        </div>

    )
}

export default Products;