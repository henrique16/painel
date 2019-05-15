import React from 'react';
import DadosTrab from '../ProviderDados/DadosTrab';
import TrabalhadorHead from './TrabalhadorHead';
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    overflow: auto;
    margin-top: 11%;
    margin-bottom: 4%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 #ccc;
    height: 100%;
    overflow: auto;
    padding: 1% 1%;

    @media (min-width: 755px) {
        width: 49.5%;
        margin-top: 0;
        margin-bottom: 0;
        float: right;
    }
`

class ContainerDireita extends React.Component {
    constructor(props) {
        super(props);
        this.state = { teste: false };
    }

    render() {
        const e = this.state.teste;
        return (
            <Div>
                <TrabalhadorHead />
                {this.props.state === true ? <DadosTrab /> : ''}
            </Div>
        );
    }
}

export default ContainerDireita;