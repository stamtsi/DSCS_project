import loadable from '@loadable/component';

export { default as SignIn } from './SignIn';
export const PasswordRequest = loadable(() => import('./passwords/Request'));
export const PasswordReset = loadable(() => import('./passwords/Reset'));
export const Register = loadable(() => import('./Register'));
