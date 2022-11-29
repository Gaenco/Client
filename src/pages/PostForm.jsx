import React, { useState } from 'react'
import Axios from 'axios';

function PostForm() {

const url = "http://localhost:3000/" // LOCALHOST DE API//
const [data,  setData] = useState({
    nombre: "",
    email: "",
    edad: "",
    pais: ""
})

function submit(e){
    e.preventDefault();
    Axios.post(url,{
        nombre: data.nombre, 
        email: data.email,
        edad: data.edad,
        pais: data.pais
    })
    .then(res=>{
        console.log(res.data)
    })
}

 function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    setData(newData)
    console.log(newData)
 }

    return(
        <div className='post-form-container'>
            <form className='form-container' onSubmit={(e)=> submit(e)}>
                <h1 className='form-h1 font-poppins font-semibold xs:text-[30px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'> Rellena el formulario para inscribirte</h1>
                <div className='font-poppins'>Nombre:</div><input className='form-input' onChange={(e)=>handle(e)} id="nombre" value={data.nombre} placeholder='Lionel Messi' type="text"></input>
                <div className='font-poppins'>Correo:</div><input className='form-input' onChange={(e)=>handle(e)} id="email" value={data.email}  placeholder='7balonesdeoro@gmail.com' type="email"></input>
                <div className='font-poppins'>Edad:</div><input className='form-input' onChange={(e)=>handle(e)} id="edad" value={data.edad}  placeholder='35' type="number"></input>
                <div className='font-poppins'>País:</div><input className='form-input' onChange={(e)=>handle(e)} id="pais" value={data.pais}  placeholder='Argentina' type="text"></input>
                <button className='form-submit-button'> Enviar </button>
            </form>
        </div>
    );
};


export default PostForm;













