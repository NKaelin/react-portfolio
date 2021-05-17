import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            data: [
                {title: "California"},
                {title: "Hawaii"},
                {title: "Florida"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something else"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change title</button>
            </div>
        );
    }
}