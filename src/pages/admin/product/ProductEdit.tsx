import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../../../api/products';
import { ProductType } from '../../../types/Types';


type ProductUpdateProps = {
    onUpdate: (product: ProductType) => void
};

type FormInputs = {
    _id:any,
    name: string,
    price: number,
    quantity: number,
    images: string,
    category: string
}


const ProductEdit = (props: ProductUpdateProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            reset(data);

        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate("/admin/product")
    }


    return (
        <form className="w-90 " onSubmit={handleSubmit(onSubmit)}>
            <h2>Update sản phẩm</h2>
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
            <div className="form-group ">
                <input type="text" className="form-control" id="category" aria-describedby="emailHelp"  {...register('category', { required: true })} placeholder="Danh mục" />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>


    )
}

export default ProductEdit;

