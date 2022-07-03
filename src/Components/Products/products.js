import { useNavigate, Link } from "react-router-dom";
import "./products.css";
import torobPic from "../../torob.png"
import searchPic from "../../search.png"
import NumberFormat from "react-number-format"
import {
    Button, Modal, Navbar, Nav,
    NavDropdown, Container, Dropdown, Collapse, Accordion
} from 'react-bootstrap';
import { useEffect, useState } from "react"
import phoneImg from "../../phone.jpg";
import heartImg from "../../heart.png";
import cartImg from "../../shopping_cart.png";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";





const Products = () => {
    const dispatch = useDispatch();
    const [priceFilter, setpriceFilter] = useState(0);
    const [searchBoxText, setSearchBoxText] = useState("");
    const [response, setResponse] = useState("");
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);
    const [checkBox3, setCheckBox3] = useState(false);
    const [mobileBrands, setMobileBrands] = useState([]);
    const [tabletBrands, setTabletBrands] = useState([]);
    const [laptopBrands, setLaptopBrands] = useState([]);
    const navigate = useNavigate();

    const myProductArray = window.location.pathname.split("/");
    let device = "";
    let brand = "";

    if (myProductArray.length == 2) {
        device = myProductArray[1];
    } else if (myProductArray.length == 3) {
        device = myProductArray[1];
        brand = myProductArray[2];

    }

    // useEffect(() => {
    //     if (brand == "") {
    //         setCheckBox1(false)
    //         setCheckBox2(false)
    //         setCheckBox3(false)
    //     } else {
    //         if (brand == "samsung") {
    //             if (device == "mobiles") {
    //                 MobileBrands.push("SAMSUNG")
    //             } else if (device == "tablets") {
    //                 TabletBrands.push("SAMSUNG")
    //             }
    //             setCheckBox1(true)
    //         } else if (brand == "xiaomi") {
    //             if (device == "mobiles") {
    //                 MobileBrands.push("XIAOMI")
    //             } else if (device == "tablets") {
    //                 TabletBrands.push("XIAOMI")
    //             }
    //             setCheckBox2(true)
    //         } else if (brand == "apple") {
    //             if (device == "mobiles") {
    //                 MobileBrands.push("APPLE")
    //             } else if (device == "tablets") {
    //                 TabletBrands.push("APPLE")
    //             } else if (device == "laptops") {
    //                 LaptopBrands.push("APPLE")
    //             }
    //             setCheckBox3(true)
    //         } else if (brand == "lenovo") {
    //             LaptopBrands.push("LENOVO")
    //             setCheckBox1(true)
    //         } else if (brand == "asus") {
    //             LaptopBrands.push("ASUS")
    //             setCheckBox2(true)
    //         }
    //     }
    //      console.log(MobileBrands)
    //     console.log(TabletBrands)
    //     console.log(LaptopBrands)
    // }, []);

    // console.log(device + " " + brand);

    let persianDevice = "";
    let deviceFilter = "";
    switch (device) {
        case "mobiles": persianDevice = "گوشی"; deviceFilter = "MOBILE"; break;
        case "tablets": persianDevice = "تبلت"; deviceFilter = "TABLET"; break;
        case "laptops": persianDevice = "لپ تاپ"; deviceFilter = "LAPTOP"; break;
    }

    const handleCheckBox1 = (check) => {
        console.log(check)
        // console.log(checkBox1)
        if (checkBox1) {
            if (device == "mobiles") {
                setMobileBrands(mobileBrands.slice(mobileBrands.indexOf("SAMSUNG", 1)))
            } else if (device == "tablets") {
                setTabletBrands(tabletBrands.slice(tabletBrands.indexOf("SAMSUNG", 1)))
            } else if (device == "laptops") {
                setLaptopBrands(laptopBrands.slice(laptopBrands.indexOf("LENOVO", 1)))
            }
        } else {
            if (device == "mobiles") {
                setMobileBrands(arr => [...arr, "SAMSUNG"])
            } else if (device == "tablets") {
                setTabletBrands(arr => [...arr, "SAMSUNG"])
            } else if (device == "laptops") {
                setLaptopBrands(arr => [...arr, "LENOVO"])
            }
        }
        console.log(mobileBrands)
        console.log(tabletBrands)
        console.log(laptopBrands)
        setCheckBox1(!checkBox1)
    }

    const handleCheckBox2 = (check) => {
        console.log(check)
        //  console.log(checkBox2)
        if (checkBox1) {
            if (device == "mobiles") {
                setMobileBrands(mobileBrands.slice(mobileBrands.indexOf("XIAOMI", 1)))
            } else if (device == "tablets") {
                setTabletBrands(tabletBrands.slice(tabletBrands.indexOf("XIAOMI", 1)))
            } else if (device == "laptops") {
                setLaptopBrands(laptopBrands.slice(laptopBrands.indexOf("ASUS", 1)))
            }
        } else {
            if (device == "mobiles") {
                setMobileBrands(arr => [...arr, "XIAOMI"])
            } else if (device == "tablets") {
                setTabletBrands(arr => [...arr, "XIAOMI"])
            } else if (device == "laptops") {
                setLaptopBrands(arr => [...arr, "ASUS"])
            }
        }
        console.log(mobileBrands)
        console.log(tabletBrands)
        console.log(laptopBrands)
        setCheckBox2(!checkBox2)
    }

    const handleCheckBox3 = (check) => {
        console.log(check)
        // console.log(checkBox3)        
        if (checkBox1) {
            if (device == "mobiles") {
                setMobileBrands(mobileBrands.slice(mobileBrands.indexOf("APPLE", 1)))
            } else if (device == "tablets") {
                setTabletBrands(tabletBrands.slice(tabletBrands.indexOf("APPLE", 1)))
            } else if (device == "laptops") {
                setLaptopBrands(laptopBrands.slice(laptopBrands.indexOf("APPLE", 1)))
            }
        } else {
            if (device == "mobiles") {
                setMobileBrands(arr => [...arr, "APPLE"])
            } else if (device == "tablets") {
                setTabletBrands(arr => [...arr, "APPLE"])
            } else if (device == "laptops") {
                setLaptopBrands(arr => [...arr, "APPLE"])
            }
        }
        console.log(mobileBrands)
        console.log(tabletBrands)
        console.log(laptopBrands)

        setCheckBox3(!checkBox3)
    }
    console.log("out")
    console.log(mobileBrands)
    console.log(tabletBrands)
    console.log(laptopBrands)

    const newestFilter = () => {
        let filter = {
            sortBy: "DATE_DESCENDING",
            categories: [deviceFilter],
            mobileBrands: mobileBrands,
            tabletBrands: tabletBrands,
            laptopBrands: laptopBrands
        };
        console.log(filter)
        axios.get('http://ie-final-project.herokuapp.com/product/get-filtered-products', filter)
            .then((res) => {
                console.log(res);
                setResponse(res);
            }, (error) => {
                console.log(error)
            });
    }

    const oldestFilter = () => {
        let filter = {
            sortBy: "DATE_ASCENDING",
            categories: [deviceFilter],
            mobileBrands: mobileBrands,
            tabletBrands: tabletBrands,
            laptopBrands: laptopBrands
        };
        console.log(filter)
        axios.get('http://ie-final-project.herokuapp.com/product/get-filtered-products', filter)
            .then((res) => {
                console.log(res);
                setResponse(res);
            }, (error) => {
                console.log(error)
            });
    }

    const mostExpensiveFilter = () => {
        let filter = {
            sortBy: "PRICE_DESCENDING ",
            categories: [deviceFilter],
            mobileBrands: mobileBrands,
            tabletBrands: tabletBrands,
            laptopBrands: laptopBrands
        };
        console.log(filter)
        axios.get('http://ie-final-project.herokuapp.com/product/get-filtered-products', filter)
            .then((res) => {
                console.log(res);
                setResponse(res);
            }, (error) => {
                console.log(error)
            });
    }

    const chippestFilter = () => {
        let filter = {
            sortBy: "PRICE_ASCENDING",
            categories: [deviceFilter],
            mobileBrands: mobileBrands,
            tabletBrands: tabletBrands,
            laptopBrands: laptopBrands
        };
        console.log(filter)
        axios.get('http://ie-final-project.herokuapp.com/product/get-filtered-products', filter)
            .then((res) => {
                console.log(res);
                setResponse(res);
            }, (error) => {
                console.log(error)
            });
    }

    const moreFilter = () => {
        let filter = {
            categories: [deviceFilter],
            mobileBrands: mobileBrands,
            tabletBrands: tabletBrands,
            laptopBrands: laptopBrands
        };
        console.log(filter)
        axios.get('http://ie-final-project.herokuapp.com/product/get-filtered-products', filter)
            .then((res) => {
                console.log(res);
                setResponse(res);
            }, (error) => {
                console.log(error)
            });
    }

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
                                <Dropdown.Item href="#/newest" onClick={() => newestFilter()}> جدیدترین </Dropdown.Item>
                                <Dropdown.Item href="#/oldest" onClick={() => oldestFilter()}>قدیمی ترین </Dropdown.Item>
                                <Dropdown.Item href="#/expensive" onClick={() => mostExpensiveFilter()}>گران ترین</Dropdown.Item>
                                <Dropdown.Item href="#/chip" onClick={() => chippestFilter()}>ارزان ترین</Dropdown.Item>
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
                                                        <input type="checkbox"
                                                            defaultChecked={brand == "samsung" || brand == "lenovo" ? true : false}
                                                            value="1"
                                                            onChange={(e) => {
                                                                handleCheckBox1(e.target.value)
                                                            }}
                                                        ></input>
                                                    </div>
                                                    <div>
                                                        <label>{device == "mobiles" || device == "tablets" ? "شیائومی" : "ایسوس"}</label>
                                                        <input type="checkbox"
                                                            defaultChecked={brand == "xiaomi" || brand == "asus" ? true : false}
                                                            value="2"
                                                            onChange={(e) => {
                                                                handleCheckBox2(e.target.value)
                                                            }}
                                                        ></input>
                                                    </div>
                                                    <div>
                                                        <label>اپل</label>
                                                        <input type="checkbox"
                                                            defaultChecked={brand == "apple" ? true : false}
                                                            value="3"
                                                            onChange={(e) => {
                                                                handleCheckBox3(e.target.value)
                                                            }}
                                                        ></input>
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
                        <Button className="btn-danger"
                            onClick={() => moreFilter()}
                        >اعمال فیلترها</Button>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Products;