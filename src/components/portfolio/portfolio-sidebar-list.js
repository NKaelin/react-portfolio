import React from "react";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div className="sidebar-item">
        <div className="sidebar-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <h1 className="title">{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
      </div>
    );
  });

  return <div className="sidebar-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;