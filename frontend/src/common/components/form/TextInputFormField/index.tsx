import React, { FC } from 'react';

import { Input } from 'common/styled';

import { FormField } from '../FormField';
import { FormFieldProps } from 'typings/Form';

interface Props extends FormFieldProps {
    value: string | number;
    type?: string;
    labelColor?: string;
}

export const TextInputFormField: FC<Props> = ({ name, type = 'text', ...props }) => (
    <FormField
        label={props.label}
        error={props.error}
        touched={props.touched}
        labelColor={props.labelColor}
    >
        <Input
            name={name}
            type={type}
            value={props.value}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
        />
    </FormField>
);
