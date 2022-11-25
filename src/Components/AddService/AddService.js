import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {         
        console.log(data)
        const url =`http://localhost:5000/product`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result));
    };

    
    return (
        <div className='w-50 mx-auto'>
            <h1>Add user</h1>
           <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='price' type="number" {...register("Price")} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />                
                <input className='mb-2' placeholder='PhotoUrl' type="text" {...register("img")} />
                <input type="submit" value="AddService" />
                
                
    </form>
        </div>
    );
};
   
export default AddService;
