import React, { Component } from "react";

const style = {
    width: '100%',
    float: 'left',
    marginTop: '0.5%',
    marginBottom: '0.5%'
}

const tabela = {
    width: '100%',
    backgroundColor: '#33587b',
    borderRadius: '5px',
    boxShadow: '0 2px 4px 0 #ccc'
}

const th = {
    width: '16%',
    textAlign: 'center',
    padding: '2%',
    color: '#f5f5f5'
}

export default class TrabalhadorHead extends Component {
    render() {
        return (
            <div style={style}>
                <table style={tabela}>
                    <tr>
                        <th style={th}>RE</th>
                        <th style={th}>Nome</th>
                        <th style={th}>Telefone</th>
                        <th style={th}>Horário</th>
                        <th style={th}>Status</th>
                    </tr>
                </table>
            </div>
        );
    }
}