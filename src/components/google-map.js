import React from "react";

const GoogleMap = ({ extraClass, zoneContent }) => {
  const [mapData] = zoneContent || [];
  const mapDetails = JSON.parse(mapData?.Content?.ContentObject || "{}");

  return (
    mapDetails && (
      <div className={`google-map__${extraClass}`}>
        <iframe
          title={mapDetails.title}
          src={mapDetails.location}
          className={`map__${extraClass}`}
          allowFullScreen
        ></iframe>
      </div>
    )
  );
};

export default GoogleMap;
