import React from 'react'

type Props = {}

const CategoryEdit = (props: Props) => {
  return (
    <div>
      <form className="w-90 " >
        <div className="form-group ">
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp"  placeholder="Tên sản phẩm" />
        </div> <br />
      
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default CategoryEdit