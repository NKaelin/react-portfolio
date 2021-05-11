import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log('Page rendered');
    }

    portfolioItems() {
        const data = ['Cali', 'Hawaii', 'Florida'];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}