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