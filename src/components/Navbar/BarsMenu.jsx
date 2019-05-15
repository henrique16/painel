import React from 'react';
import styled from "styled-components";
import MenuPainel from './MenuPainel';
import MenuDashboard from './MenuDashboard';
import MenuMapa from './MenuMapa';

const Ul = styled.span`
    width: 141px;
    float: left;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    display: grid;
    margin-top: 29px;
    margin-left: -50px; 
    padding: 7px 0;
    box-shadow: 0 2px 4px 0 #A9A9A9;
`
export default class BarsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change() {
        this.props.open();
    }

    render() {
        return (
            <Ul onMouseLeave={this.change}>
                <MenuPainel handleChange={this.props.handleChange} />
                <MenuDashboard handleChange={this.props.handleChange} />
                <MenuMapa handleChange={this.props.handleChange} />
            </Ul>
        );
    }
}