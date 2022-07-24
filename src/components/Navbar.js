import { AppBar, Box, Button, Container, Toolbar, Typography, Backdrop, Input } from "@mui/material"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { filterByName, getPostAsync } from "../redux/posts/post.action";
import PostsForm from "./PostsForm";

export default function Navbar() {

    const [ searchInput, setSearchInput ] = useState({
        searchInput: ''
    })

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleBackDrop = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const handleSearchInput = (event) => {
        setSearchInput({
            searchInput: event.target.value
        })
    }

    const searchPost = () => {
        if (!searchInput.searchInput) {
            dispatch(getPostAsync())
        }
        dispatch(filterByName(searchInput.searchInput))
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar style={{ padding: '0% 20%' }} >
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{textDecoration:'none', color:'#eee'}} > 
                                TC IT test
                            </Link>
                        </Typography>
                        <Input placeholder="Find POST" 
                            name="searchInput"
                            style={{ color:"white" }} 
                            sx={{ flexGrow: 1 }}
                            onChange={handleSearchInput}></Input>
                        <Button 
                            variant="contained"
                            color="primary"
                            sx={{ margin: '0% 20% 0% 5%' }}
                            onClick={searchPost}>
                            SEARCH
                        </Button>
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={handleToggle}>
                            New Post
                        </Button>
                    </Toolbar>
                </Container>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}>
                    <PostsForm handleBackDrop={handleBackDrop} />
                </Backdrop>
            </AppBar>
        </Box>
    )
}
