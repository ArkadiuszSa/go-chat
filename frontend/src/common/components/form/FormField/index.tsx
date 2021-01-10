import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Label, HintLabel, FormError } from 'common/styled';
import { color } from 'config/variablesConfig';

export const FormFieldWrapper = styled.div`
    width: 100%;
    margin: 0;
    position: relative;
`;

interface Props {
    label: string;
    children: ReactNode;
    error?: string;
    touched?: boolean;
    hint?: string;
    labelColor?: string;
}

export const FormField: FC<Props> = ({ labelColor = color.primaryFont, ...props }) => (
    <FormFieldWrapper>
        <div>
            <Label color={labelColor}>{props.label}</Label>
            <HintLabel>{props.hint}</HintLabel>
        </div>
        {props.children}
        <FormError> {props.touched && <>{props.error}</>}</FormError>
    </FormFieldWrapper>
);
