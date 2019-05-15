import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
library.add(faMapMarkerAlt);

const Div = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
`

const Li = styled.li`
    cursor: pointer;
    list-style: none;
    margin-left: 25px;
    :hover {text-decoration: underline}
`

export default class MenuMapa extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.handleChange({ pagina: e.target.value });
    }

    render() {
        const mapa = 3;
        return (
            <Div>
                <span style={{ marginLeft: '8px' }}>
                    <FontAwesomeIcon style={{ cursor: 'default' }} icon='map-marker-alt' />
                </span>
                <Li value={mapa} onClick={this.change}>Mapa</Li>
            </Div>
        );
    }
}