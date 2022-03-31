import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { token, user } = isAuthenticate();

export const create = (product: any) => {
    const url = `products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    })
}
export const list = () => {
    const url = `products`;
    return instance.get(url)
}
export const read = (_id: number) => {
    const url = `product/${_id}`;
    return instance.get(url)
}
export const remove = (_id: number) => {
    const url = `product/${_id}`;
    return instance.delete(url)
}
export const update = (product: any) => {
    const url = `product/${product._id}`;
    return instance.put(url, product)
}