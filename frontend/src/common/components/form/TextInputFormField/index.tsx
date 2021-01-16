import React, { FC } from 'react';

import { Input } from 'common/styled';

import { FormField } from '../FormField';
import { FormFieldProps } from 'typings/Form';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props extends FormFieldProps {
    registerOptions: RegisterOptions;
    type?: string;
    labelColor?: string;
    showError?: boolean;
}

export const TextInputFormField: FC<Props> = ({
    name,
    type = 'text',
    registerOptions,
    ...formFieldProps
}) => {
    const { register } = useFormContext();
    return (
        <FormField name={name} {...formFieldProps}>
            <Input name={name} type={type} ref={register(registerOptions)} />
        </FormField>
    );
};
