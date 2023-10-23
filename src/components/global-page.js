import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";
import useScrollPosition from "use-scroll-position";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import BlockManager from "@/components/global-component";
import Footer from "@/components/footer";
import delve from 'dlv';

const GlobalPage = ({ pageContext: { pageData, global } }) => {
  console.log("pageData", pageData);
  console.log("global", global);
  const [menuData, setMenuData] = useState([]);
  const blocks = delve(pageData, 'attributes.blocks');

  useEffect(() => {
    setMenuData(global?.navigation);
  }, []);
  const [body_, setbody_] = useState();
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();
  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);


  let element = document.getElementById("fix-header");

  if (typeof (element) != 'undefined' && element != null) {
    header === "fixed" && scrollPosition > 10
      ? header_ && header_[0].classList.add("is-fixed")
      : header_ && header_[0].classList.remove("is-fixed");
  }

  useEffect(() => {
    let Navicon = document.querySelector('.navicon');
    let sidebarmenu = document.querySelector('.myNavbar ');

    function toggleFunc() {
      sidebarmenu.classList.toggle('show');
      Navicon.classList.toggle('open');
    }
    Navicon.addEventListener('click', toggleFunc);

    let navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener('click', function () { checkLi(this) });
    }

    function checkLi(current) {
      current.parentElement.parentElement.querySelectorAll("li").forEach(el =>
        (current.parentElement !== el) ? el.classList.remove('open') : ''
      );

      setTimeout(() => {
        current.parentElement.classList.toggle('open');

      }, 100);
    }
  }, [])

  return (
    <Layout PageTitle={[]}>
      {menuData && (
        <HeaderOne
          {...menuData}
          pageData={pageData}
        // headerDetail={headerDetail}
        />
      )}
      <BlockManager
        blocks={blocks}
        type="collectionType"
        contentType="page"
        pageData={pageData}
      />
      {/* {footerDetail && <Footer footerDetail={footerDetail} />} */}
    </Layout>
  );
};

export default GlobalPage;
