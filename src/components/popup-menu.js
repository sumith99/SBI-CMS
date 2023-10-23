import React, { useContext, Fragment, useRef, useState } from "react";
import { Link } from "gatsby";
import { MenuContext } from "@/context/menu-context";
// import { LogoImage } from "@/data";
import { useSelector } from "react-redux";
import { isEqual } from "lodash";


const PopupMenu = () => {
  return (
    <>
      <ul className="nav navbar-nav">
        <li className="active"><Link to={'/'}><span className="ti-home"></span></Link>
        </li>
        <li><Link to={'#'}>Pages <i className="fa fa-chevron-down"></i></Link>
          <ul className="sub-menu">
            <li><Link to={'#'}>About Us <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu">
                <li><Link to={'./about-1'} className="fuzion-page">About Us 1</Link></li>
                <li><Link to={'./about-2'} className="fuzion-page">About Us 2</Link></li>
              </ul>
            </li>
            <li><Link to={'#'}>Error Page <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu">
                <li><Link to={'./error-403'} className="fuzion-page">Error 403</Link></li>
                <li><Link to={'./error-404'} className="fuzion-page">Error 404</Link></li>
                <li><Link to={'./error-405'} className="fuzion-page">Error 405</Link></li>
              </ul>
            </li>
            <li><Link to={'#'}>Coming Soon <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu">
                <li><Link to={'./coming-soon-1'} className="fuzion-page">Coming Soon 1 </Link></li>
              </ul>
            </li>
            <li><Link to={'./under-maintenance'} className="fuzion-page">Under Maintenance</Link></li>
            <li><Link to={'./expertise'} className="fuzion-page">Expertise</Link></li>
            <li><Link to={'./project-management'} className="fuzion-page">Project management</Link></li>
            <li><Link to={'./our-projects'} className="fuzion-page">Our Projects</Link></li>
            <li><Link to={'./project-details'} className="fuzion-page">Project Details </Link></li>
            <li><Link to={'./team'} className="fuzion-page">Our Team</Link></li>
            <li><Link to={'./faqs'} className="fuzion-page">FAQ's</Link></li>
            <li><Link to={'./login'} className="fuzion-page">Login </Link></li>
            <li><Link to={'./register'} className="fuzion-page">Register </Link></li>
            <li><Link to={'./contact'} className="fuzion-page">Contact Us</Link></li>
          </ul>
        </li>
        <li><Link to={'#'}>Our Service <i className="fa fa-chevron-down"></i></Link>
          <ul className="sub-menu">
            <li><Link to={'./service'} className="fuzion-page">Services</Link></li>
            <li><Link to={'./services-details'} className="fuzion-page">Services Details</Link></li>
          </ul>
        </li>
        <li><Link to={'#'}>Blog <i className="fa fa-chevron-down"></i></Link>
          <ul className="sub-menu">
            <li><Link to={'#'}>Blog Standard <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu left">
                <li><Link to={'./blog-standard'} className="fuzion-page">Standard</Link></li>
                <li><Link to={'./blog-standard-left-sidebar'} className="fuzion-page">Standard Left Sidebar</Link></li>
                <li><Link to={'./blog-standard-right-sidebar'} className="fuzion-page">Standard Right Sidebar</Link></li>
              </ul>
            </li>
            <li><Link to={'#'}>Blog Classic <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu left">
                <li><Link to={'./blog-classic-grid'} className="fuzion-page">Classic</Link></li>
                <li><Link to={'./blog-classic-left-sidebar'} className="fuzion-page">Classic Left Sidebar</Link></li>
                <li><Link to={'./blog-classic-right-sidebar'} className="fuzion-page">Classic Right Sidebar</Link></li>
              </ul>
            </li>
            <li><Link to={'#'}>Blog List <i className="fa fa-angle-right"></i></Link>
              <ul className="sub-menu left">
                <li><Link to={'./blog-list-left-sidebar'} className="fuzion-page">List Left Sidebar</Link></li>
                <li><Link to={'./blog-list-right-sidebar'} className="fuzion-page">List Right Sidebar</Link></li>
              </ul>
            </li>
            <li><Link to={'./blog-details'} className="fuzion-page">Blog Details</Link></li>
          </ul>
        </li>
        <li><Link to={'#'}>Our Portfolio <i className="fa fa-chevron-down"></i></Link>
          <ul className="sub-menu left">
            <li><Link to={'./portfolio-full-width'} className="fuzion-page">Portfolio Full Width  </Link></li>
            <li><Link to={'./portfolio-grid-2'} className="fuzion-page">Portfolio Grid 2 </Link></li>
            <li><Link to={'./portfolio-grid-3'} className="fuzion-page">Portfolio Grid 3 </Link></li>
            <li><Link to={'./portfolio-grid-4'} className="fuzion-page">Portfolio Grid 4 </Link></li>
          </ul>
        </li>
        <li><Link to={'#'}>Shop <i className="fa fa-chevron-down"></i></Link>
          <ul className="sub-menu left">
            <li><Link to={'./shop-columns'} className="fuzion-page">Shop Columns</Link></li>
            <li><Link to={'./shop-columns-sidebar'} className="fuzion-page">Shop Columns Sidebar</Link></li>
            <li><Link to={'./shop-product-details'} className="fuzion-page">Product Details</Link></li>
            <li><Link to={'./shop-cart'} className="fuzion-page">Cart</Link></li>
            <li><Link to={'./shop-checkout'} className="fuzion-page">Checkout</Link></li>
            <li><Link to={'./shop-wishlist'} className="fuzion-page">Wishlist</Link></li>
            <li><Link to={'./shop-login'} className="fuzion-page">Shop Login</Link></li>
            <li><Link to={'./shop-register'} className="fuzion-page">Shop Register</Link></li>
          </ul>
        </li>
        <li><Link to={'#'}>Element <i className="fa fa-chevron-down"></i> </Link>
          <ul className="sub-menu left">
            <li><Link to={'./short-icon-box'} className="fuzion-page">Icon Box</Link></li>
            <li><Link to={'./short-counter'} className="fuzion-page">Counter</Link></li>
            <li><Link to={'./short-portfolio'} className="fuzion-page">Portfolio</Link></li>
            <li><Link to={'./short-tabs'} className="fuzion-page">Tabs</Link></li>
            <li><Link to={'./short-team'} className="fuzion-page">Team</Link></li>
            <li><Link to={'./short-testimonial'} className="fuzion-page">Testimonial</Link></li>
            <li><Link to={'./short-form'} className="fuzion-page">Form</Link></li>
            <li><Link to={'./short-accordions'} className="fuzion-page">Accordions</Link></li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default PopupMenu;
