import React from 'react';
import styled from "styled-components";

const Div = styled.div`
    width: 6%; float: left;
`

const Span = styled.span`
    color: #000000; font-weight: 700; font-size: 19px; cursor: pointer;
`

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div>
                <Span>Untitle</Span>
            </Div>
        );
    }
}