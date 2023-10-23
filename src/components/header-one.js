import React, { useState, useEffect, useContext } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";
// import { getAllMenu } from "@/services/wogdSlice";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";
import { USER } from "@/services/tagFile";
// import { useAddRecordMutation } from "@/services/wogdApi";
import userLogo from "../assets/svg/person-20.svg";
import { IoBagHandleOutline } from "@react-icons/all-files/io5/IoBagHandleOutline";
import Logo from "./logo";
import delve from 'dlv';
import bnr from './../assets/images/banner/bnr3.jpg';
import PopupMenu from "./popup-menu";


const HeaderOne = (props) => {
  const [sticky, setSticky] = useState(false);
  const { searchStatus, updateSearchStatus, enterScreens } = useContext(
    SearchContext
  );
  console.log("navigation", props);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const [menu, setMenu] = useState([]);
  const [logo, setLogo] = useState({});
  const [headerIcons, setHeaderIcons] = useState([]);
  const [rpgLink, setRpgLink] = useState({});
  // const [addUser, { isLoading: isUserAddLoading }] = useAddRecordMutation();
  // const {
  //   loginWithRedirect,
  //   isAuthenticated,
  //   getAccessTokenSilently,
  //   user,
  //   logout,
  // } = useAuth0();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  // useEffect(() => {
  //   if (!cookies.get("accessToken")) {
  //     if (isAuthenticated) {
  //       const userDetail = {
  //         Name: user.name,
  //         Description: user.Description ? user.Description : "",
  //         Email: user.email,
  //         SsoIdentifier: user.sub,
  //       };
  //       var accessToken = "";
  //       const getToken = async () => {
  //         accessToken = await getAccessTokenSilently({
  //           audience: process.env.GATSBY_AUTH0_AUDIENCE,
  //         });
  //         const cookies = new Cookies();
  //         cookies.set("accessToken", accessToken);
  //       };
  //       getToken();
  //       let tokenInterval = setInterval(() => {
  //         if (accessToken.length > 0) {
  //           addUser({
  //             entity: "User/CreateUser",
  //             data: userDetail,
  //             tag: USER,
  //           }).then(response => { });
  //           clearInterval(tokenInterval);
  //         }
  //       }, 2000);
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [isAuthenticated]);

  const handleLogout = () => {
    cookies.remove("accessToken", { path: "/" });
  };
  const handleSearchClick = e => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  // useEffect(() => {
  //   if (headerDetail) {
  //     let logoInfo = headerDetail.find(value => value.Name.includes("Logo"));
  //     setLogo(logoInfo);
  //     let headerIconRecords = headerDetail.filter(value =>
  //       value.Name.toLowerCase().includes("Icon".toLowerCase())
  //     );
  //     const link = JSON.parse(
  //       headerDetail.filter(val => val.FeaturedText === "Link")[0].Content
  //         .ContentObject
  //     );
  //     setRpgLink(link);
  //     setHeaderIcons(headerIconRecords);
  //   }
  // }, [headerDetail]);

  // useEffect(() => {
  //   if (screens) {
  //     enterScreens(screens);
  //   }
  //   if (menuData) {
  //     let mainMenu = [];
  //     menuData.forEach(val => {
  //       if (!val.ParentId) {
  //         mainMenu.push(val);
  //       }
  //     });
  //     if (mainMenu.length) {
  //       mainMenu = mainMenu.sort(
  //         (valueOne, valueTwo) => valueOne.SortOrder - valueTwo.SortOrder
  //       );
  //       mainMenu = mainMenu.map(menuItem => ({
  //         ...menuItem,
  //         SubMenu: menuItem.InverseParent,
  //       }));
  //       dispatch(getAllMenu(mainMenu));
  //       setMenu(mainMenu);
  //     }
  //   }
  // }, [menuData, screens]);

  // return (
  //   <header
  //     className={`header_01 ${true === sticky ? "fixedHeader animated " : ""
  //       }pt-3 pb-2`}
  //     id="header"
  //   >
  //     <Container fluid>
  //       <Row className="justify-content-between align-items-center">
  //         <Col className="col-6" xl={2} lg={2} md={3} sm={3}>
  //           <div className="logo p-0 m-0">
  //             {logo &&
  //               <Logo
  //                 button={delve(navigation, 'logo.data')}
  //                 locale={delve(pageData, 'attributes.locale')}
  //               />
  //             }
  //           </div>
  //         </Col>
  //         {/* <Col xl={7} lg={6} sm={8} md={7} className="d-none d-lg-block">
  //           <nav className="mainmenu text-center">
  //             <ul>
  //               {menu.map((links, index) => {
  //                 return (
  //                   <li
  //                     key={index}
  //                     className={`${links.SubMenu.length ? "menu-item-has-children" : ""
  //                       } pb-0`}
  //                   >
  //                     {links.target ? (
  //                       <a href={links.url} target={links.target}>
  //                         {links.Name}
  //                       </a>
  //                     ) : (
  //                       <Link to={links.TargetWebsite}>{links.Name}</Link>
  //                     )}
  //                     {links.SubMenu.length ? (
  //                       <ul className="sub-menu">
  //                         {links.SubMenu.map((subLinks, index) => {
  //                           return (
  //                             <li key={index}>
  //                               {subLinks.target ? (
  //                                 <a
  //                                   href={subLinks.url}
  //                                   target={subLinks.target}
  //                                 >
  //                                   {subLinks.Name}
  //                                 </a>
  //                               ) : (
  //                                 <Link to={subLinks.TargetWebsite}>
  //                                   {subLinks.Name}
  //                                 </Link>
  //                               )}
  //                             </li>
  //                           );
  //                         })}
  //                       </ul>
  //                     ) : null}
  //                   </li>
  //                 );
  //               })}
  //             </ul>
  //           </nav>
  //         </Col>
  //         <Col xl={3} lg={4} md={2} sm={4} className="col-6">
  //           <div className="navigator text-right action_button py-0 align-items-center">
  //             {headerIcons &&
  //               headerIcons.length > 0 &&
  //               headerIcons.map((icon, index) =>
  //                 icon.FeaturedText !== "Link" ? (
  //                   <a
  //                     key={index}
  //                     className={
  //                       handleSearchClick
  //                         ? "search searchToggler"
  //                         : "menu hamburger"
  //                     }
  //                     href="#"
  //                     onClick={e => {
  //                       switch (icon.CallToAction) {
  //                         case "handleSearchClick":
  //                           return handleSearchClick(e);
  //                         case "handleMenuClick":
  //                           return handleMenuClick(e);
  //                         default:
  //                           break;
  //                       }
  //                     }}
  //                   >
  //                     <i className={icon.Content.Name}></i>
  //                   </a>
  //                 ) : (
  //                   <>
  //                     <a
  //                       key={index}
  //                       href={rpgLink.redirectURL}
  //                       className="search d-block d-lg-none"
  //                     >
  //                       <IoBagHandleOutline
  //                         style={{
  //                           width: "1.8rem",
  //                           height: "1.8rem",
  //                         }}
  //                       />
  //                     </a>
  //                     <a
  //                       key={index}
  //                       href={rpgLink.redirectURL}
  //                       className="search d-none d-lg-block"
  //                       style={{ fontSize: "1rem" }}
  //                     >
  //                       {rpgLink.title}
  //                     </a>
  //                   </>
  //                 )
  //               )}
  //             {!!cookies.get("accessToken") ? (
  //               <Dropdown>
  //                 <Dropdown.Toggle variant="light" id="dropdown-basic">
  //                   <img src={userLogo}></img>
  //                 </Dropdown.Toggle>
  //                 <Dropdown.Menu>
  //                   <Dropdown.Item
  //                     className="profile_item"
  //                     onClick={() => handleLogout()}
  //                   >
  //                     Logout
  //                   </Dropdown.Item>
  //                 </Dropdown.Menu>
  //               </Dropdown>
  //             ) : (
  //               <Button
  //                 className="auth_button"
  //                 variant="light"
  //                 onClick={() =>
  //                   loginWithRedirect({
  //                     appState: {
  //                       returnTo: window.location.pathname,
  //                     },
  //                   })
  //                 }
  //               >
  //                 Login
  //               </Button>
  //             )}
  //           </div>
  //         </Col> */}
  //       </Row>
  //     </Container>
  //   </header>
  // );
  return (
    <>
      <header className="site-header header mo-left header-transparent" id="fix-header">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <Link to={'./'} className="fuzion-page"><img src={`${process.env.REACT_APP_LOGO_300}`} alt="" /></Link>
              </div>

              <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className="extra-nav">
                <div className="extra-cell">
                  <Link to={'./contact'} className="fuzion-page site-button primary">Inquire Now </Link>
                </div>
              </div>

              <div className="extra-nav">
                <div className="extra-cell">
                  <Link to={'./contact'} className="fuzion-page site-button primary">Inquire Now </Link>
                </div>
              </div>

              <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                <div className="logo-header mostion d-md-block d-lg-none">
                  <Link to={'./'} className="fuzion-page"><img src={`${process.env.REACT_APP_LOGO_300}`} alt="" /></Link>
                </div>
                <PopupMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default HeaderOne;
