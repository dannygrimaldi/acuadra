// ui-components.jsx
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const UlMensajes = styled.ul`
    max-width: 800px;
    margin: 10px auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
    overflow-y: auto;
`;

const LiMensaje = styled.li`
    background-color: lightblue;
    border: 2px solid dodgerblue;
    padding: 10px 20px;
    border-radius: 10px;
    width: fit-content;
    max-width: 70%;
    align-self: flex-start;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    font-size: 16px;
`;

export { UlMensajes, LiMensaje };
