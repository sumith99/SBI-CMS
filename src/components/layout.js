import React, { Fragment, useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
// import SearchPopup from "@/components/search-popup";
// import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";

// import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@/css/animate.css";
// import "@/css/font-awesome.min.css";
// import "@/css/icons.css";
// import "@/css/preset.css";
// import "@/css/theme.css";
// import "@/css/responsive.css";
// import "@/css/epics.css";
// import "@/css/systems.css";

import './../assets/css/plugins.css';
import './../assets/css/style.css';
import './../assets/css/templete.css';
import './../assets/css/skin/skin-1.css';
// import './plugins/slick/slick.min.css';
// import './plugins/slick/slick-theme.min.css';
// import 'react-modal-video/css/modal-video.min.css';

const Layout = ({ PageTitle, children }) => {
  const { searchStatus } = useContext(SearchContext);
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window !== undefined) {
      if (window.scrollY > 70) {
        setScrollTop(true);
      } else if (window.scrollY < 70) {
        setScrollTop(false);
      }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollTop);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollTop);
  //   };
  // }, [scrollTop]);

  return (
    <Fragment>
      {/* <Helmet>
        <title>World of Game Design - {PageTitle?.MetaTitle ? `${PageTitle?.MetaTitle}` : `${PageTitle?.Name}`}</title>
        <link rel="canonical" href="https://www-d.wogd.com/" />
        <meta name="title" content={PageTitle?.MetaTitle && PageTitle?.MetaTitle} />
        <meta name="description" content={PageTitle?.MetaDescription && PageTitle?.MetaDescription} />
        <meta name="image" content="https://www-d.wogd.com/static/logoWOGD-Bright-No-Shadow-6e4a0da5fe54649e236e8a3f451a59a0.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www-d.wogd.com/" />
        <meta property="og:title" content="World of Game Design" />
        <meta property="og:description" content="Enter a realm of epic stories that explore endless worlds using the latest artists, writers, and technologies.  Whether you love miniatures, Roleplaying Games (RPGS), terrain, 3D printing, comics, board games, or card games; we think you will find something to entertain you at the World of Game Design" />
        <meta property="og:image" content="https://www-d.wogd.com/static/logoWOGD-Bright-No-Shadow-6e4a0da5fe54649e236e8a3f451a59a0.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www-d.wogd.com/" />
        <meta property="twitter:title" content="World of Game Design" />
        <meta property="twitter:description" content="Enter a realm of epic stories that explore endless worlds using the latest artists, writers, and technologies.  Whether you love miniatures, Roleplaying Games (RPGS), terrain, 3D printing, comics, board games, or card games; we think you will find something to entertain you at the World of Game Design" />
        <meta property="twitter:image" content="https://www-d.wogd.com/static/logoWOGD-Bright-No-Shadow-6e4a0da5fe54649e236e8a3f451a59a0.png" />
      </Helmet> */}
      <div id="wrapper">{children}</div>
      {/* {true === searchStatus ? <SearchPopup /> : null} */}
      {true === menuStatus ? <PopupMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top showit"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
