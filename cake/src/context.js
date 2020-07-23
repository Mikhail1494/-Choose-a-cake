import React, { Component } from "react";

const CakeShop = React.createContext();

class Cake extends Component {
    render() {
        return (
            <CakeShop.Cake value="hello from context">
                {this.props.children}
            </CakeShop.Cake>
        );
    }
}
const ProductConsumer = CakeShop.Consumer;
export { Cake, ProductConsumer };
