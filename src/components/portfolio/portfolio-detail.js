import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://nataliekaelin.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
      })
      .catch((error) => {
        console.log("getPortfolioItem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;
    return (
      <div className="portfolio-detail-wrapper">
        <div className="portfolio-detail-image">
          <img src={thumb_image_url} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}
