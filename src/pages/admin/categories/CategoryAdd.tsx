import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CategoryType } from '../../../types/category';

type Props = {
onAddCategory:(props:CategoryType) => void

}


const CategoryAdd = (props: Props) => {

  const {register, handleSubmit, formState: { errors }} = useForm<CategoryType>();

  const onSubmit: SubmitHandler<CategoryType> = (data) =>{
         props.onAddCategory(data)
  }
  return (
    <div>
      <form className="w-90 " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group ">
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
        </div> <br />
      
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default CategoryAdd