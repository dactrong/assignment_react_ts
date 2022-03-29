import instance from './instance';

export const signup = (signin:any) =>{
     const url = `/signup`;
     return instance.post(url, signin)
}