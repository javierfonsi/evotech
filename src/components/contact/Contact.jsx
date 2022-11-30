//import React, { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css"
import { Button,  TextField } from '@mui/material';

const Contact = () => {
    const navigate = useNavigate()
    //useEffect(()=>{
    //  if(userInfo && isAutenticate){
    //    navigate('/home')
    //  }

    //}, [userInfo, navigate, isAutenticate])

    const getInitialValues = ()=>{
      return {
        email: "",
        nombre: "",
        info: ""
      }
    }

    const getValidationSchema = ()=>{
      return Yup.lazy((values) =>
      Yup.object().shape({
        email: Yup.string().required("Campo Obligatorio"),
        nombre: Yup.string().required("Campo Obligatorio"),
        info: Yup.string().required("Campo Obligatorio"),
      })
      );
    }

    const onSubmit = ( x )=>{
      //console.log(x)
      let data = {
        email: x.email,
        nombre: x.nombre,
        info: x.info
      }
      console.log(data)
      navigate("/")

    }

    const { handleSubmit, values, setFieldValue } = useFormik({
      initialValues: getInitialValues(),
      validateOnChange: false,
      validateOnBlur: false,
      enableReinitialize: true,
      validationSchema: getValidationSchema(),
      onSubmit,
    })

  return (
    <div className='layaut'>
      <section className='main'>
        <div className='main-card'>
          <div className='title'>
            <h1>EVOTECH</h1>
            <h2 className='slogan'>Resuelve tus dudas, por lo que te invitamos a escribirnos.</h2>
          </div>
          <form className='container-form' onSubmit={handleSubmit}>
            <TextField className='email-field' 
                type="text" 
                label="Correo electrónico" 
                variant="outlined" 
                value={values.email || ""} 
                onChange={ (e)=>{
                  setFieldValue( "email" , e.target.value )
                }}
              />
            <TextField className='email-field' 
                type="text" 
                label="Ingresa tu nombre" 
                variant="outlined" 
                value={values.nombre || ""} 
                onChange={ (e)=>{
                  setFieldValue( "nombre" , e.target.value )
                }}
              />
            <TextField className='text-field' 
                type="text" 
                label="Ingresa tu información" 
                variant="outlined" 
                value={values.info || ""} 
                onChange={ (e)=>{
                  setFieldValue( "info" , e.target.value )
                }}
              />
            
              <Button className='email-field' variant="contained" color="info" type='submit'>Enviar</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
