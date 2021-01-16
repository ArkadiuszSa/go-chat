import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Label, HintLabel, FormError } from 'common/styled';
import { color } from 'config/variablesConfig';
import { useFormContext } from 'react-hook-form';

export const FormFieldWrapper = styled.div`
    width: 100%;
    margin: 0;
    position: relative;
    margin-bottom: 1.5rem;
`;

interface Props {
    name: string;
    label: string;
    children: ReactNode;
    hint?: string;
    labelColor?: string;
}

export const FormField: FC<Props> = ({ name, labelColor = color.primaryFont, ...props }) => {
    const {
        formState: { touched, isSubmitted, errors },
    } = useFormContext();

    return (
        <FormFieldWrapper>
            <div>
                <Label color={labelColor}>{props.label}</Label>
                <HintLabel>{props.hint}</HintLabel>
            </div>
            {props.children}
            {console.log(touched[name])}
            {console.log(errors)}

            <FormError> {(touched[name] || isSubmitted) && <>{errors[name]?.message}</>}</FormError>
        </FormFieldWrapper>
    );
};
