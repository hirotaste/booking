import { ErrorTailorConfig } from '@ngneat/error-tailor';

export const errorTailorConfig: ErrorTailorConfig = {
  errors: {
    useValue: {
      required: 'Campo obrigatório.',
      email: 'Email inválido.',
      date: 'Data inválida.'
    }
  }
};
