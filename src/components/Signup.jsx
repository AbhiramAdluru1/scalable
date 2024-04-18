/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Link,
    TextField,
    Typography
  } from '@mui/material'
  import Grid from '@mui/material/Grid'
import axios from 'axios'
  import React, { useState } from 'react'
//   import { useDispatch } from 'react-redux'
  import { useNavigate } from 'react-router-dom'
//   import { signUp } from '../actions/actions'
   
  const SignUp = () => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
      fullName: '',
      email: 'test@gmail.com',
      userName: '',
      password: '',
      organiser: false
    })
    const [error, setError] = useState({})
   // http://evntz-node-api-ra-ie.ap-south-1.elasticbeanstalk.com/authentication/registration   .
    const validate = () => {
      const errObj = {}
      if (!userDetails.fullName) {
        errObj.fullName = true
      }
      if (!userDetails.email) {
        errObj.email = true
      }
      if (!userDetails.userName) {
        errObj.userName = true
      }
      if (!userDetails.password) {
        errObj.password = true
      }
      setError(errObj)
      return errObj
    }
   
    const registerUser = async() => {
      if (!Object.keys(validate()).length) {
        const url = 'http://evntz-node-api-ra-ie.ap-south-1.elasticbeanstalk.com/authentication/registration';
      const response = await axios.post(url, userDetails);
      console.log(response);
      if(response.data.OK) {
        navigate('/login')
      }
      }
    }
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Card sx={{ mt: 10 }} raised>
            <CardHeader
              sx={{
                mt: 5
              }}
              title='Create an account'
            ></CardHeader>
            <CardContent
              sx={{
                mb: 3
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  mt: 3,
                  '& > :not(style)': {
                    m: 1
                  }
                }}
              >
                <Grid item xs={12} sm={12} md={4}>
                  <Typography
                    variant='button'
                    display='block'
                    sx={{ margin: '10px 10px 15px 50px' }}
                    gutterBottom
                  >
                    Full name:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    {...(error.fullName && {
                      error,
                      helperText: 'Please fill this field'
                    })}
                    value={userDetails.fullName}
                    onChange={e =>
                      setUserDetails({ ...userDetails, fullName: e.target.value })
                    }
                    label='Required'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Typography
                    variant='button'
                    display='block'
                    sx={{ margin: '10px 10px 15px 50px' }}
                    gutterBottom
                  >
                    User Name:
                  </Typography>{' '}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    {...(error.userName && {
                      error,
                      helperText: 'Please fill this field'
                    })}
                    value={userDetails.userName}
                    onChange={e =>
                      setUserDetails({ ...userDetails, userName: e.target.value })
                    }
                    label='Required'
                  />
                </Grid>
     
   
                <Grid item xs={12} sm={12} md={4}>
                  <Typography
                    variant='button'
                    display='block'
                    sx={{ margin: '10px 10px 15px 50px' }}
                    gutterBottom
                  >
                    Password:
                  </Typography>{' '}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    required
                    type='password'
                    {...(error.password && {
                      error,
                      helperText: 'Please fill this field'
                    })}
                    value={userDetails.password}
                    onChange={e =>
                      setUserDetails({ ...userDetails, password: e.target.value })
                    }
                    fullWidth
                    label='Required'
                  />
                </Grid>
               
                <Grid item xs={12} sm={12} md={4}></Grid>
   
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    variant='contained'
                    fullWidth
                    sx={{ background: 'color(rec2020 0.32 0.43 0.62)' }}
                    onClick={() => registerUser()}
                  >
                    Sign up
                  </Button>
                  <Link
                    variant='contained'
                    fullWidth
                    sx={{cursor: 'pointer'}}
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Link>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    )
  }
   
  // To make those two function works register it using connect
  export default SignUp