import { Button, Card, CardContent, Typography, CardActions, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPostAsync } from '../redux/posts/post.action';

export default function PostsForm({
  handleBackDrop
}) {

  const dispatch = useDispatch();

  const [valuesForm, setValueForm] = useState({
    name: '',
    description: ''
  })

  const handleChange = (event) => {
    setValueForm({
      ...valuesForm,
      [event.target.name]: event.target.value
    })
  }

  const sendForm = (event) => {
    dispatch(addPostAsync(valuesForm))
    handleBackDrop()
  }


  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
      <Grid item xs={3}>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography textAlign='center'>Create a new Post</Typography>
            <form>

              <TextField
                variant='standard'
                label='Enter a name'
                fullWidth
                sx={{
                  display: 'block',
                  margin:'5% 0%'
                }}
                name='name'
                onChange={handleChange}
                ></TextField>

              <TextField
                variant='standard'
                label='Enter a description'
                multiline
                fullWidth
                rows={4}
                sx={{
                  display: 'block',
                  margin:'5% 0%',
                }}
                name='description'
                onChange={handleChange}
              ></TextField>

            </form>
          </CardContent>
          <CardActions>
            <Grid container alignItems="center" justifyContent='center'>
              <Button
                variant='contained' 
                color='primary' 
                type='submit' 
                size="small"
                onClick={sendForm}>
                  Learn More
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
