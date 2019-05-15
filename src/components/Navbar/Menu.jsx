import React, { Component } from "react";
import styled from "styled-components";
import BarsMenu from './BarsMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);


const Div = styled.div`
    float: right; margin-top: 6px; margin-right: 14px;
`

const Span = styled.span`
    cursor: pointer;
    float: left;
`

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.change = this.change.bind(this);
    }

    change() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <Div>
                {console.log(this.state.open)}
                {this.state.open === true ?
                    <BarsMenu handleChange={this.props.handleChange} open={this.change} /> : this.state.open}
                <Span><FontAwesomeIcon onClick={this.change} icon='bars' /></Span>
            </Div >
        );
    }
}
