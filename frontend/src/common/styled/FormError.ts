import styled from '@emotion/styled';

import { color, fontSize } from 'config/variablesConfig';

interface FormErrorProps {
    isInputError?: boolean;
}

export const FormError = styled.label<FormErrorProps>`
    display: inline-block;
    bottom: -1.2rem;
    left: 0;
    font-size: ${fontSize.small};
    color: ${color.danger};
    height: 1rem;
    position: ${({ isInputError = true }) => (isInputError ? 'absolute' : 'static')};
    &:first-letter {
        text-transform: uppercase;
    }
`;
