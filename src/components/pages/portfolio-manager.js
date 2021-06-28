import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };

    this.handleSuccessfulFormSubmit =
      this.handleSuccessfulFormSubmit.bind(this);
    this.handleFormSubmitError = this.handleFormSubmitError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSuccessfulFormSubmit(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }

  handleFormSubmitError(error) {
    console.log("Form Submit Error", error);
  }

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter((item) => {
            return item.id !== portfolioItem.id;
          }),
        });
        return response.data;
      })
      .catch((error) => {
        console.log("delete error", error);
      });
  }

  getItems() {
    axios
      .get(
        "https://nataliekaelin.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
      )
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch((error) => {
        console.log("error msg", error);
      });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmit={this.handleSuccessfulFormSubmit}
            handleFormSubmitError={this.handleFormSubmitError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList
            data={this.state.portfolioItems}
            handleDeleteClick={this.handleDeleteClick}
          />
        </div>
      </div>
    );
  }
}
