    
import instance from './instance';
import { auth } from '../config/services';

export async function authenticationService(userName, password) {
  return instance.post(auth.login, { email: userName, password });
}