import { User } from '../types/User';
import instance from './instance';

export const signup = (signup:User) =>{
     const url = `/signup`;
     return instance.post(url, signup)
}
export const signin = (signin:any) =>{
    const url = `/signin`;
    return instance.post(url, signin)
}