import React from 'react'
import { useState } from 'react'

interface CategoryFormData{
    name:string
    description:string
}

const CategoryForm:React.FC = () => {

    const [category, setcategory] = useState<CategoryFormData>({
    name:'',
    description:''
})

const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setcategory((prevdata)=>({...prevdata,[event.target.name]:event.target.value}))
}

const handlesubmission = async (event:React.FormEvent) =>{
event.preventDefault
    try {
        const response = await fetch('/api/create-catagories',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(FormData)
        })
        if(response.ok){
            console.log('Category created successfully!')
            setcategory({ name:'', description:''})
        }else{
            console.error('Catagory not Created',response.statusText)
        }
    } catch (error) {
        console.error('Catagory not Created',error)
    }
}



  return (
    <div>
     <form onSubmit={handlesubmission}>
     <label htmlFor="name">Category Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={category.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={category.description}
        onChange={handleChange}
      />
      <button type="submit">Create Category</button>
     </form>
    </div>
  )
}

export default CategoryForm
