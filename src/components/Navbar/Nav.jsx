import React from 'react';
import styled from "styled-components";
import MenuDireita from './MenuDireita';
import Logo from './Logo';


const Div = styled.div`
    width: 100%; float:  left; background-color: #ffffff; padding: 2px 4%; box-shadow: 0 2px 4px 0 #A9A9A9;
`

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div>
                <MenuDireita pagina={this.props.pagina} handleChange={this.props.handleChange} />
                <Logo />
            </Div>
        );
    }
}