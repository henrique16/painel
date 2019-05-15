import React from 'react';
import styled from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
library.add(faPowerOff)

const Div = styled.div`
    width: 28px; float: right; text-align: right; margin-top: 6px; margin-right: 7px;
`

export default class Sair extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Div>
                <FontAwesomeIcon icon='power-off' />
            </Div>
        );
    }
}