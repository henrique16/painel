import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
library.add(faColumns);

const Div = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
`

const Li = styled.li`
    cursor: pointer;
    list-style: none;
    margin-left: 17px;
    :hover {text-decoration: underline}
`

export default class MenuPainel extends React.Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.handleChange({ pagina: e.target.value });
    }

    render() {
        const painel = 1;
        return (
            <Div>
                <FontAwesomeIcon style={{ cursor: 'default' }} icon='columns' />
                <Li value={painel} onClick={this.change}>Painel</Li>
            </Div>
        );
    }
}