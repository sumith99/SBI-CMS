import React, { Fragment } from "react";
const SectionTitle = ({ data }) => {
  const { title, subTitle, text } = data;
  return (
    <Fragment>
      {subTitle && <h4 className="sectionSubTitle">{subTitle}</h4>}
      {title && <h2 className="sectionTitle">{title}</h2>}
      {text && <p className="sectionDescription ">{text}</p>}
    </Fragment>
  );
};

export default SectionTitle;
