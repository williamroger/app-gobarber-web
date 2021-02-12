import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Error {
  const validationErrors: Error = {};

  err.inner.forEach(error => {
    if (error.path) validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
