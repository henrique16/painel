import React, { Component } from "react";
import styled from "styled-components";
import BarsPesquisa from './BarsPesquisa';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);


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
            <Div >
                {this.state.open === true ?
                    <BarsPesquisa
                        open={this.change}
                        handleChange={this.props.handleChange}
                        pagina={this.props.pagina}
                    /> : this.state.open}
                <Span><FontAwesomeIcon onClick={this.change} icon='search' /></Span>
            </Div >
        );
    }
}
