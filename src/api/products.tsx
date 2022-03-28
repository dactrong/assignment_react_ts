import instance from "./instance";

export const create = (product:any) =>{
       const url = `products`;
       return  instance.post(url,product) 
}
export const list = () =>{
    const url = `products`;
    return instance.get(url)
}
export const read = (_id:number)=>{
    const url = `product/${_id}`;
    return instance.get(url)
}
export const remove = (_id:number)=>{
    const url = `product/${_id}`;
    return instance.delete(url)
}
export const update= (product:any) =>{
    const url = `product/${product._id}`;
    return instance.put(url, product)
}