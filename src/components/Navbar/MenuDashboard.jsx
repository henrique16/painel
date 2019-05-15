import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
library.add(faChartBar);

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

export default class MenuDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.handleChange({ pagina: e.target.value });
    }

    render() {
        const dashboard = 2;
        return (
            <Div>
                <FontAwesomeIcon style={{ cursor: 'default' }} icon='chart-bar' />
                <Li value={dashboard} onClick={this.change}>Dashboard</Li>
            </Div>
        );
    }
}