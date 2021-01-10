import styled from '@emotion/styled';
import { Row } from 'common/styled';

import { color, fontSize } from 'config/variablesConfig';

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem 2.5rem;
    height: 2.625rem;
    border: none;
    font-size: ${fontSize.normal};
    color: ${color.primaryFont};
    cursor: pointer;
`;

export const ButtonLoaderWrapper = styled.div`
    margin-left: 0.5rem;
    position: absolute;
    right: 1rem;
`;

export const SubmitButtonWrapper = styled(Row)`
    justify-content: flex-end;
`;
