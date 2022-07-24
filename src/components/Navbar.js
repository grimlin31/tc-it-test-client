import { AppBar, Box, Button, Container, Toolbar, Typography, Backdrop } from "@mui/material"
import React from "react";
import { Link } from "react-router-dom"
import PostsForm from "./PostsForm";

export default function Navbar() {

    const [open, setOpen] = React.useState(false);
    const handleBackDrop = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar style={{ padding: '0% 20%' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{textDecoration:'none', color:'#eee'}} > 
                                TC IT test
                            </Link>
                        </Typography>
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
