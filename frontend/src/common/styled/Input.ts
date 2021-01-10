import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { color, fontSize, fontFamily } from 'config/variablesConfig';

const commonStyles = css`
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    border: 1px solid ${color.primary};
    font-size: ${fontSize.normal};
    outline: none;
    background-color: ${color.secondary};
`;

export const Input = styled.input`
    ${commonStyles}
`;

export const Textarea = styled.textarea`
    ${commonStyles}
    height: 9rem;
    resize: none;
    font-family: ${fontFamily.primary};
`;
