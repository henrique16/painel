import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from "styled-components";

const Div = styled.div`
    @media (min-width: 1024px) {
        display: inherit !important; float: left; width: 30%;
    }
`

export default class MenuEsquera extends React.Component {

    render() {
        return (
            <Div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#">Painel</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Mapa</NavLink>
                    </NavItem>
                </Nav>
            </Div>
        );
    }
}