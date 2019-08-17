import React from 'react';
import styled from 'styled-components';
import {
    subtleBoxShadow,
    lightBlueBackground,
    greenBoxShadow,
    redBoxShadow
} from './Styles';

export const Tile = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
`;

export const selectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${greenBoxShadow}
    }
`;

export const DeletableTile = styled(selectableTile)`
    &:hover {
        cursor: pointer;
        ${redBoxShadow}
    }
`;

export const DisabledTile = style(Tile)`
    pointer-events: none;
    opacity: 0.4;
`;