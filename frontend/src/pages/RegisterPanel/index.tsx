import React, { FC, useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MoonLoader from 'react-spinners/MoonLoader';

import { routes } from 'config/routesConfig';
import { ServicesContext } from 'core/contexts/ServicesContext';
import { setIsLoggedIn, setUserData, UserContext } from 'core/contexts/UserContext';
import { TextInputFormField } from 'common/components';
import { AuthForm, Button, ButtonLoaderWrapper, SubmitButtonWrapper } from 'common/styled';
import { handleRedirect } from 'common/helpers/handleRedirect';
import { RegisterRequest } from 'typings';

interface RegisterFormValues extends RegisterRequest {
    passwordRepetition: string;
}

const RegisterPanel: FC = () => {
    const form = useForm<RegisterFormValues>({ mode: 'onBlur' });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const { dispatch } = useContext(UserContext);
    const { authService } = useContext(ServicesContext);

    const onSubmit = (registerRequest: RegisterRequest) => {
        setIsLoading(true);

        authService
            .register(registerRequest)
            .then(userProfile => {
                dispatch(setUserData(userProfile));
                dispatch(setIsLoggedIn(true));
                handleRedirect(routes.chat);
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
