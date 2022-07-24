import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { deletePostAsync } from '../redux/posts/post.action';



export default function Posts() {
  const posts = useSelector(state => state.posts.postArray)

  const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }} flexDirection='column' alignItems='center' justifyContent='center'>
      <TableContainer component={Paper} style={{ width:'60%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.postid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{post.name}</TableCell>
                <TableCell align="left">{post.description}</TableCell>
                <TableCell align="right">
                <Button aria-label="delete" onClick={() => dispatch(deletePostAsync(post.postid))}>
                  Delete
                </Button>                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
