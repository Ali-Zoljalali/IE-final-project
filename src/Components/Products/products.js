import { useNavigate, Link, useParams } from "react-router-dom";
import "./products.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import NumberFormat from "react-number-format"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Collapse, Accordion
} from 'react-bootstrap';
import { useState } from "react"
import phoneImg from "../../phone.jpg";
import heartImg from "../../heart.png";
import cartImg from "../../shopping_cart.png";





const Products = () => {

    const [priceFilter, setpriceFilter] = useState(0);


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

    let persianDevice = "";
    switch (device) {
        case "mobiles": persianDevice = "گوشی"; break;
        case "tablets": persianDevice = "تبلت"; break;
        case "laptops": persianDevice = "لپ تاپ"; break;
    }


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
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>
                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>
                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>

                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>

                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>

                        <div className="eachProduct">
                            <img src={phoneImg} alt="xiaomi phone" className="productImg"></img>
                            <Link className="detailsPart" to={"/"}>گوشی شیائومی</Link>
                            {/* <h3 className="detailsPart">گوشی شیائومی</h3> */}
                            <p className="price">قیمت از 1.800.000</p>
                            <div className="bottomOfEachProduct">
                                <img src={cartImg} className="cartIcon"></img>
                                <img src={heartImg} className="wishListIcon"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="ProductsBodyRight">
                    <div className="rightFilters">
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>زیر دسته ها</Accordion.Header>
                                <Accordion.Body>

                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{persianDevice}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="checkBoxFilter">
                                                    <div>
                                                        <label>{device == "mobiles" || device == "tablets" ? "سامسونگ" : "لنوو"}</label>
                                                        <input type="checkbox" defaultChecked={brand == "samsung" || brand == "lenovo" ? true : false}></input>
                                                    </div>
                                                    <div>
                                                        <label>{device == "mobiles" || device == "tablets" ? "شیائومی" : "ایسوس"}</label>
                                                        <input type="checkbox" defaultChecked={brand == "xiaomi" || brand == "asus" ? true : false}></input>
                                                    </div>
                                                    <div>
                                                        <label>اپل</label>
                                                        <input type="checkbox" defaultChecked={brand == "apple" ? true : false}></input>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>قیمت</Accordion.Header>
                                <Accordion.Body>
                                    <input className="rangeInput" type="range" min="0" max="10000000" onInput={(e) => {
                                        setpriceFilter(e.target.value);
                                    }}></input>
                                    <p className="priceRange"> از 0 تا <NumberFormat value={priceFilter} displayType={'text'} thousandSeparator /> تومان</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Products;