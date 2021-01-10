import { ChangeEvent } from 'react';

//any is defined in  formik types
export type HandleBlur = (e: React.FocusEvent<any>) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
export type HandleChange = (e: ChangeEvent<any>) => void; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface FormFieldProps {
    handleChange: HandleChange;
    handleBlur: HandleBlur;
    name: string;
    label: string;
    touched?: boolean;
    error?: string;
    hint?: string;
}
