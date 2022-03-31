import { CategoryType } from "../types/category";
import instance from "./instance";

export const creat = (category:CategoryType) =>{
    const url = `category`;
    return instance.post(url, category)

}
export const listCategory = () =>{
    const url = `category`;
    return instance.get(url)
}
export const displayOne = (_id:number) =>{
    const url = `category/${_id}`;
    return instance.get(url)
}
export const removeCategory = (_id:number) =>{
    const url = `category/${_id}`;
    return instance.delete(url)
}
export const updateCategory = (category:CategoryType) =>{
    const url = `category/${category._id}`;
    return instance.put(url, category)
}