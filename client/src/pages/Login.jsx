import { CameraAlt  } from '@mui/icons-material';
import { Container, Paper, TextField, Typography , Button, Stack, Avatar, IconButton  } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import { useFileHandler, useInputValidation , useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validators';

const Login = () => {
    const [isLogin , setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin(((prev) => !prev))


    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("" , usernameValidator);
    const password = useStrongPassword();

    const avatar = useFileHandler("single");


    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleSignUp = (e) => {
        e.preventDefault()
    }



  return (
    <Container component={"main"} maxWidth="xs" sx={{height: "100vh" , display: "flex" , justifyContent: "center" , alignItems: "center" }} >
        <Paper elevation={3} sx={{padding:4 , display: "flex" , flexDirection: "column" , alignItems: "center" }}>
    {
        isLogin ? <>
        <Typography variant='h5'>Login</Typography>
        <form style={{width: "100%" , marginTop: "1rem"}} onSubmit={handleLogin} >
            <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
            <TextField required fullWidth label="Password" type='password' margin='normal'  variant='outlined' value={password.value} onChange={password.changeHandler} />
            <Button sx={{marginTop: "1rem"}} fullWidth variant="contained" color='primary' type='submit' >Login</Button>

            <Typography m={"1rem"} textAlign={"center"} >OR</Typography>
            <Button  fullWidth variant="text" color='secondary' type='submit' onClick={() => setIsLogin(false)} >Sign Up Instead</Button>
        </form>
        </>
        :
        <>
        <Typography variant='h5'>Sign Up</Typography>
        <form style={{width: "100%" , marginTop: "1rem"}} onSubmit={handleSignUp} >

            {/* For Avatar */}
            <Stack position={"relative"} width={"10rem"} margin={"auto"} >
            <Avatar sx={{width: "10rem" , height: "10rem" , objectFit: "contain"}} src={avatar.preview} />
            

            {/* For Icons */}
            <IconButton sx={{position: "absolute" , bottom: "0" , right: "0" , color:"white" , bgcolor: "rgba(0,0,0,0.5)" , ":hover": {bgcolor: "(0,0,0,0.7)"}}} component= "label" >
                <>
                <CameraAlt />
                <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />   {/* Ye khud se banaya hua component hai */}
                </>
            </IconButton>
            </Stack>

            {
                avatar.error && (
                    <Typography color={'error'} varient = "caption" m={'1rem auto'} width={'fit-content'} display={'block'} >
                        {avatar.error}
                    </Typography>
                )
            }


            <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
            <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />

            <TextField required fullWidth label="UserName" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />

            {
                username.error && (
                    <Typography color={'error'} varient = "caption" >
                        {username.error}
                    </Typography>
                )
            }

            <TextField required fullWidth label="Password" type='password' margin='normal'  variant='outlined' value={password.value} onChange={password.changeHandler} />

            {
                password.error && (
                    <Typography color={'error'} varient = "caption" >
                        {password.error}
                    </Typography>
                )
            }



            <Button sx={{marginTop: "1rem"}} fullWidth variant="contained" color='primary' type='submit' >Sign Up</Button>

            <Typography m={"1rem"} textAlign={"center"} >OR</Typography>
            <Button  fullWidth variant="text" color='secondary' type='submit' onClick={toggleLogin} >Login Instead</Button>
        </form>
        </>
    }
        </Paper>

    </Container>
  )
}

export default Login
