import React from 'react'
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 180px 180px;
`;

const NavLink = styled.div`
    cursor: pointer;
    ${props =>
    css`
        width: 100px;
        border-bottom: 2px solid red;
    `}
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
};

function NavItem({ name }) {
    return (
        <AppContext.Consumer>
            {({ firstVisit, page, setPage }) => (
                <NavLink
                    active={page === name}
                    onClick={() => setPage(name)}
                    hidden={firstVisit && name === "dashboard"}
                >
                    { toProperCase(name) }
                </NavLink>
            )}
        </AppContext.Consumer>
    );
}

export default function() {
    return (
        <Bar>
            <Logo>Crypto Dash</Logo>
            <div />
            <NavItem active name="dashboard" />
            <NavItem name="settings" />
        </Bar>
    )
}