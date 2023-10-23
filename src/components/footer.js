import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

const Footer = ({ footerDetail }) => {
  const [sectionData] = footerDetail || [];
  let footerSectionData = {};
  const [sectionContent, setSectionContent] = useState({});

  useEffect(() => {
    if (sectionData) {
      footerSectionData = JSON.parse(
        sectionData?.Content?.ContentObject || "{}"
      );
      if (!isEmpty(footerSectionData)) {
        let contactDetail = {
          title: footerSectionData?.title,
          email: footerSectionData?.email,
          address: footerSectionData?.address,
          copyRightText: footerSectionData?.copyRightText,
          redirectURL: footerSectionData.redirectURL
            ? footerSectionData.redirectURL
            : "#",
        };

        if (footerSectionData.images.length) {
          let socialIcon = [];
          footerSectionData.images.forEach(value => {
            if (Object.keys(value).includes("iconClass")) {
              socialIcon.push({
                title: value?.name,
                image: value?.url,
                url: value?.redirectURL,
                class: value?.iconClass,
              });
            } else {
              contactDetail.logo = value;
            }
          });
          contactDetail.socialIcon = socialIcon;
        }
        setSectionContent(contactDetail);
      }
    }
  }, [sectionData]);

  return (
    <>
      {!isEmpty(sectionContent) && (
        <footer id="footer" className="footer_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6 col-md-5">
                {sectionContent.logo && (
                  <aside className="widget aboutwidget">
                    <a href="/">
                      {sectionContent?.logo?.url && (
                        <img src={sectionContent?.logo?.url} alt="" />
                      )}
                    </a>
                    <p>
                      {sectionContent?.logo?.description &&
                        sectionContent?.logo?.description}
                    </p>
                  </aside>
                )}
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4">
                {sectionContent && (
                  <aside className="widget contact_widgets">
                    {sectionContent?.title && (
                      <h3 className="widget_title">{sectionContent?.title}</h3>
                    )}
                    {sectionContent.address && (
                      <p style={{ whiteSpace: "pre-wrap" }}>
                        {sectionContent?.address}
                      </p>
                    )}
                    {sectionContent?.email && (
                      <p>
                        <a href={`mailto:${sectionContent?.email}`}>
                          {sectionContent?.email}
                        </a>
                      </p>
                    )}
                  </aside>
                )}
              </div>
              <div className="col-lg-3 col-sm-2 col-md-3">
                <aside className="widget social_widget">
                  <h3 className="widget_title">social</h3>
                  <ul>
                    {sectionContent.socialIcon &&
                      sectionContent?.socialIcon.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item?.url}
                            style={{ cursor: "pointer" }}
                            target="_blank"
                          >
                            {item?.class && <i className={item?.class}></i>}
                            {item?.title && item?.title}
                          </a>
                        </li>
                      ))}
                  </ul>
                </aside>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="copyright">
                  © copyright {new Date().getFullYear()} by{" "}
                  <a href={sectionContent.redirectURL}>
                    {sectionContent.copyRightText}
                  </a>
                  , All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
