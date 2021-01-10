import React, { FC, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { authService } from 'core/rootService';
import { TextInputFormField } from 'common/components';
import { getRequired } from 'common/helpers/validation';
import { Credentials } from 'typings/Auth';

import { FormError, SubmitButtonWrapper, Button, ButtonLoaderWrapper } from 'common/styled';

import * as S from './styles';

const LogInPanel: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (values: Credentials) => {
        setIsLoading(true);

        authService
            .logIn(values)
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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: getRequired('email'),
            password: getRequired('password'),
        }),
        onSubmit: handleSubmit,
    });

    const { values, touched, errors, handleChange, handleBlur } = formik;

    return (
        <S.AuthForm onSubmit={formik.handleSubmit}>
            <TextInputFormField
                name="email"
                label="Email"
                value={values.email}
                touched={touched.email}
                error={errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <TextInputFormField
                type="password"
                name="password"
                label="Password"
                value={values.password}
                touched={touched.password}
                error={errors.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
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
        </S.AuthForm>
    );
};

export default LogInPanel;
