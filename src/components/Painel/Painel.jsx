import React from 'react';
import ContainerEsquerda from './ContainerEsquerda';
import ContainerDireita from './ContainerDireita'
import styled from "styled-components"


const Div = styled.div`
    width: 100%;
    height: 95%;
    float: left;
    background: #E8E8E8;
    padding: 6% 6%;

    @media (min-width: 755px) {
        padding: 1% 1%;
    }
`

class Painel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: false }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ change: true });
    }

    render() {

        return (
            <Div>
                <ContainerEsquerda state={this.handleChange} clientePosto={this.props.clientePosto} />
                <ContainerDireita state={this.state.change} />
            </Div>
        );
    }
}

export default Painel;