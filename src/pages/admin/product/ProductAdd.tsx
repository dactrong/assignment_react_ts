import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { listCategory } from '../../../api/category';
import { CategoryType } from '../../../types/category';

type ProductAddProps = {
    onAdd: (props: FormInputs) => void
};

type FormInputs = {
    name: string,
    price: number,
    quantity: number,
    images: string,
    category: string
}


const ProductAdd = (props: ProductAddProps) => {

    const [category, setCategory] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCategory()
            setCategory(data);

        }
        getCategory();
    }, []);


    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = (dataInput) => {

        props.onAdd(dataInput);
        // chuyển trang
        navigate("/admin/product");
    }


    return (
        <form className="w-90 " onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group ">
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
            </div> <br />
            <div className="form-group">
                <input type="number" className="form-control" id="price"  {...register('price', { required: true })} placeholder="Giá sản phẩm" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control" id="quantity" aria-describedby="emailHelp"  {...register('quantity', { required: true })} placeholder="Số lượng" />
            </div> <br />
            <div className="form-group ">
                <input type="text" className="form-control" id="images" aria-describedby="emailHelp"  {...register('images', { required: true })} placeholder="Ảnh" />
            </div> <br />
            
            <select id="category" className="show-tick form-control border border-danger"   {...register('category', { required: true })}>
                {category?.map((category,index) => {
                    
                    return(
                        <option >{category?._id}</option >
                        
                    )
                   
                })}


            </select>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>


    )
}

export default ProductAdd;