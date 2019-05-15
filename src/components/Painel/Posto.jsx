import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import DadosTrab from "../ProviderDados/DadosTrab";
import ContainerEsquerda from './ContainerEsquerda';
import "../Style/App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components"

library.add(faExclamationCircle)

const Astyle = {
    backgroundColor: '#ffdb4d'
}

const Dstyle = {
    backgroundColor: '#ff4d4d'
}

const Pstyle = {
    backgroundColor: '#ffffff'
}

const postoDiv = {
    width: '31.3333%',
    float: 'left',
    backgroundColor: '#ffffff',
    borderRadius: '5px; text-align: center',
    boxShadow: '0 2px 4px 0 #A9A9A9',
    cursor: 'pointer',
    backgroundColor: '#fff',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '1%',
    marginBottom: '1%',
    textAlign: 'center'
}

const span = {
    fontSize: '12px',
    fontWeight: 700,
    color: '#000'
}

const detalhes = {
    width: '100%',
    float: 'left',
    backgroundColor: '#f5f5f5',
    padding: '3% 0'
}

const h = {
    fontSize: '11px',
    fontWeight: 600,
    margin: 0
}

const text = 'Não há número'

export default React.memo(function Posto(props) {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggleOpen = () => {
        setPopoverOpen(true)
    }

    const toggleClose = () => {
        setPopoverOpen(false)
    }

    const e = props.userData.situacaoPosto;

    return (
        <PostoDivComponent >
            <div className="div-icon" status={props.userData.Posto} onClick={props.state}>
                <span style={span}>11 4232-5517</span>
            </div>
            <div style={detalhes}>
                <h2 style={h} onClick={() => toggleClose()} onDoubleClick={() => toggleOpen()}
                    id={"provider" + `${props.value}`}>Detalhes</h2>
            </div>
            <Popover placement="bottom" isOpen={popoverOpen} target={"provider" + `${props.value}`}>
                <PopoverBody>Cliente:<br />{props.userData.Cliente} {props.userData.NomeCliente}</PopoverBody>
                <PopoverBody>Posto:<br />{props.userData.Posto} {props.userData.NomePosto}</PopoverBody>
                {/* <PopoverBody>Responsável:<br />{props.userData.responsavel}</PopoverBody>
                <PopoverBody>Telefone:<br />{props.userData.telContato}</PopoverBody> */}
            </Popover>
        </PostoDivComponent>
    );
});

const PostoDivComponent = styled.div`
    width: 31.3333%;
    float: left;
    background-color: #ffffff;
    border-radius: 5px; text-align: center;
    box-shadow: 0 2px 4px 0 #A9A9A9;
    cursor: pointer;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    text-align: center;
    
    ${({ status }) =>
        status === 1027 ?
            `
        background-color: #ffdb4d;
        `:
            `
        background-color: #ff4d4d;
        `
    }
    
    @media (min-width: 1280px){
        width: 23%;
    }
`