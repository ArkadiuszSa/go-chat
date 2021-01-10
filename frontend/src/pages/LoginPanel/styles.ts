import styled from '@emotion/styled';

import { breakpoints } from 'config/variablesConfig';

export const NetworkErrorWrapper = styled.div`
    margin-top: 1rem;
`;

export const AuthForm = styled.form`
    max-width: 21rem;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    margin: auto;

    ${breakpoints.lg} {
        width: 21rem;
    }
`;
