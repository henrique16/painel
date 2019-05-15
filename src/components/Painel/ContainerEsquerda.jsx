import React from 'react';
import DadosPosto from '../ProviderDados/DadosPosto';
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    display: initial !important;
    overflow: auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 #ccc;
    padding: 1% 1%;

    @media (min-width: 755px) {
        width: 49.5%;
    }
`

class ContainerEsquerda extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Div>
                <DadosPosto clientePosto={this.props.clientePosto} state={this.props.state} />
            </Div>
        );
    }
}

export default ContainerEsquerda;