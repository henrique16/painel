import React from 'react';
import styled from "styled-components";

const Ul = styled.span`
    width: 153px;
    float: left;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    display: grid;
    margin-top: 29px;
    margin-left: -59px; 
    padding: 7px 0;
    box-shadow: 0 2px 4px 0 #A9A9A9;
    text-align: center;
`

const Input = styled.input`
    width: 125px;
    border-radius: 2px;
    border: 0.5px solid #ccc;
    padding: 0 6px;
    margin-top: 7px;
    margin-bottom: 7px;
`
const Btn = styled.input`
    width: 8em;
    border-radius: 3px;
    cursor: pointer;
    border: 0.5px solid #ccc;
    box-shadow: 0 2px 2px 0 #ccc;
    margin-top: 7px;
    margin-bottom: 7px;
`
export default class BarsPesquisa extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cliente: '', posto: '' }
        this.changeCliente = this.changeCliente.bind(this);
        this.changePosto = this.changePosto.bind(this);
        this.openPop = this.openPop.bind(this);
        this.stateClientePosto = this.stateClientePosto.bind(this);
    }

    changeCliente(e) {
        this.setState({ cliente: e.target.value });
    }

    changePosto(e) {
        this.setState({ posto: e.target.value });
    }

    openPop() {
        this.props.open();
    }

    stateClientePosto() {
        this.props.handleChange({ pagina: this.props.pagina, cliente: this.state.cliente, posto: this.state.posto });
    }

    render() {
        return (
            <Ul onMouseLeave={this.openPop}>
                <div>
                    <Input type='text' placeholder='Cliente'
                        value={this.state.cliente}
                        onChange={this.changeCliente}
                    />
                </div>
                <div>
                    <Input type='text' placeholder='Posto'
                        value={this.state.posto}
                        onChange={this.changePosto}
                    />
                </div>
                <div>
                    <Btn type='button' value="Pesquisar" onClick={this.stateClientePosto} />
                </div>
            </Ul>
        );
    }
}