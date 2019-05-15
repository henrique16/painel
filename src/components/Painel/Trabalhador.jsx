import React, { useState } from "react";

const style = {
    width: '100%',
    float: 'left',
    marginTop: '0.5%',
    marginBottom: '0.5%'
}

const tabela = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px 0 #ccc'
}

const td = {
    width: '16%',
    textAlign: 'center',
    padding: '2%'
}

export default React.memo(function Trabalhador(props) {
    const { userData, value } = props

    return (
        <div style={style} id={"provider" + `${value}`}>
            <table style={tabela}>
                <tr>
                    <td style={td}>{userData.nomeCliente}</td>
                    <td style={td}>{userData.codigoPosto}</td>
                    <td style={td}>{userData.nomePosto}</td>
                    <td style={td}>{userData.responsavel}</td>
                    <td style={td}>{userData.telContato}</td>
                </tr>
            </table>
        </div>
    );
});
