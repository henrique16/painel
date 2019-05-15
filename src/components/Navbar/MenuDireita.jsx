import React from 'react';
import styled from "styled-components";
import Sair from './Sair';
import Pesquisar from './Pesquisar';
import Menu from './Menu';

const Div = styled.div`

`

export default class MenuDireita extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div>
                <Sair />
                {this.props.pagina === 1 ?
                    <Pesquisar pagina={this.props.pagina} handleChange={this.props.handleChange} />
                    : ''
                }
                <Menu handleChange={this.props.handleChange} />
            </Div>
        );
    }
}