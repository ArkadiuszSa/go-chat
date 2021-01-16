import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MoonLoader from 'react-spinners/MoonLoader';

import { RegisterRequest } from 'typings';

import { authService } from 'core/rootService';
import { TextInputFormField } from 'common/components';
import { AuthForm, Button, ButtonLoaderWrapper, SubmitButtonWrapper } from 'common/styled';

interface RegisterFormValues extends RegisterRequest {
    passwordRepetition: string;
}

const RegisterPanel: FC = () => {
    const form = useForm<RegisterFormValues>({ mode: 'onBlur' });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (registerRequest: RegisterRequest) => {
        setIsLoading(true);

        authService
            .register(registerRequest)
            .then(userProfile => {
                console.log('heajajadjnsflkjsd');
                console.log(userProfile);
            })
            .catch(err => {
                console.log('error');

                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <FormProvider {...form}>
            <AuthForm onSubmit={form.handleSubmit(onSubmit)}>
                <TextInputFormField
                    name="name"
                    label="Name"
                    registerOptions={{ required: 'This field is required' }}
                />
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
                <TextInputFormField
                    name="passwordRepetition"
                    label="Password repetition"
                    registerOptions={{ required: 'This field is required' }}
                />
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

export default RegisterPanel;
