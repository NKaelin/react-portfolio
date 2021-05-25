import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio!",
            isLoading: false,
            data: [
                {title: "California", category: "West Coast", slug: "california" },
                {title: "Thailand", category: "Asia", slug: "thailand" },
                {title: "Hawaii", category: "Pacific Ocean", slug: "hawaii" },
                {title: "Florida", category: "East Coast", slug: "florida" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug}/>;
        })
    }

    

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('West Coast')}>West Coast</button>
                <button onClick={() => this.handleFilter('Asia')}>Asia</button>
                <button onClick={() => this.handleFilter('Pacific Ocean')}>Pacific Ocean</button>
                <button onClick={() => this.handleFilter('East Coast')}>East Coast</button>

                {this.portfolioItems()}

            </div>
        );
    }
}