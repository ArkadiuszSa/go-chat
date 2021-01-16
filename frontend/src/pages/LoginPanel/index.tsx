import React, { FC, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { FormProvider, useForm } from 'react-hook-form';

import { authService } from 'core/rootService';
import { Credentials } from 'typings/Auth';
import { TextInputFormField } from 'common/components';
import {
    FormError,
    SubmitButtonWrapper,
    Button,
    ButtonLoaderWrapper,
    AuthForm,
} from 'common/styled';

import * as S from './styles';

const LogInPanel: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (values: Credentials) => {
        console.log(values);
        setIsLoading(true);

        authService
            .logIn(values)
            .then(userProfile => {
                console.log(userProfile);
            })
            .catch(err => {
                console.log('error');
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    const form = useForm<Credentials>({ mode: 'onBlur' });

    return (
        <FormProvider {...form}>
            <AuthForm onSubmit={form.handleSubmit(onSubmit)}>
                <TextInputFormField
                    name="email"
                    label="Email"
                    registerOptions={{ required: 'This field is required' }}
                />
                <TextInputFormField
                    name="password"
                    label="Password"
                    registerOptions={{ required: 'This field is required' }}
                />
                <S.NetworkErrorWrapper>
                    <FormError isInputError={false}>{''}</FormError>
                </S.NetworkErrorWrapper>
                <SubmitButtonWrapper>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && (
                            <ButtonLoaderWrapper>
                                <MoonLoader size={15} color={'white'} />
                            </ButtonLoaderWrapper>
                        )}
                        Submit
                    </Button>
                </SubmitButtonWrapper>
            </AuthForm>
        </FormProvider>
    );
};

export default LogInPanel;
