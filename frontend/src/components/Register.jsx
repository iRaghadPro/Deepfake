import React from "react"
import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import AxiosInstance from './forms/AxiosInstance'
import { useNavigate } from 'react-router-dom'

const Register = () =>{

  const navigate = useNavigate()
  const {handleSubmit, control} = useForm()

  const submission = (data) => {
    AxiosInstance.post(`register/`,{
      email: data.email,
      password: data.password,
    })

    .then(() => {
      navigate(`/`)
    })
  }



  return(

      <div className={"myBackground"} >

        <form onSubmit={handleSubmit(submission)}>

        <Box className={"whiteBox"}>

          <Box className={"itemBox"}>
            <Box className={"title"}> إنشاء حســـاب.</Box>

          </Box>

          <Box className={"itemBox"}>
            <MyTextField className={"text"}
              label = {"البريد الالكتروني"}
              name = {"email"}
              control = {control}
            />
          </Box>

          <Box className={"itemBox"}>
            <MyPassField 
              label = {" كلمة المرور "}
              name = {"password"}
              control = {control}
            />
          </Box>

          <Box className={"itemBox"}>
            <MyPassField 
              label = {" تأكيد كلمة المرور "}
              name = {"password2"}
              control = {control}
            />
          </Box>

          <Box className={"itemBox"}>
            <MyButton
              type ={"submit"}
              label = {" إنشاء حساب "}
            />
            
          </Box>

          <Box className={"itemBox"}>
            لديك حساب؟
            <Link to="/"> تسجيل الدخول </Link>
            
          </Box>

        </Box>

        </form>

      </div>
  )
}

export default Register