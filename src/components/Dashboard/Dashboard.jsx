import React from 'react';
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    height: 94%;
    float: left;
`

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div>
                Dashboard
            </Div>
        );
    }
}