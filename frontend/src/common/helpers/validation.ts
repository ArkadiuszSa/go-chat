import * as Yup from 'yup';

export const getRequired = (name: string) => Yup.string().trim().required(`${name} is required`);
