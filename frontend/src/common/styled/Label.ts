import styled from '@emotion/styled';

import { fontSize, color } from 'config/variablesConfig';

export const Label = styled.label`
    font-size: ${fontSize.normal};
    color: ${color.primaryFont};
    display: inline-block;
    margin-bottom: 0.5rem;
    color: ${({ color }) => color};
`;

export const HintLabel = styled(Label)`
    color: ${color.primaryDark};
`;
