import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";


const pages = ["Inicio", "Nosotros", "Clientes", "Contacto", "Servicios"];


function MessageAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (x) => {
    if (x === pages[0]) {
      navigate("/");
    } else if (x === pages[1]) {
      navigate("/nosotros");
    } else if (x === pages[2]) {
      navigate("/clientes");
    } else if (x === pages[3]) {
      navigate("/contacto");
    } else {
      navigate("/portafolio");
    }
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor:"transparent"}}>
    {/*<AppBar position="static">*/}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669719981/evotech/logo/evo-xs_2b-rbg-098190_pnrlmq.png" alt="" />
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "black", display: "flex", p:2 }}
              >
                <Typography variant="span"  textAlign="center">
                {page}
                </Typography>
                
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 1 }}>
          <Card sx={{  mt:1, boxShadow: "none", mb:1, display: { xs: "flex", md: "none" }}}>
              <CardMedia sx={{backgroundColor:"transparent", maxWidth: 210}}
                component="img"
                alt="logo-evotech"
                height="70px"
                width="100%"
                image="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669679289/evotech/logo/evo-xxs_2c-rbg_uvpfuu.png"
              />
            </Card>
          </Box>

          <Box >
            <IconButton sx={{ display: { xs: "block", md: "none" } }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
            
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography variant="p"  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>    
  );
}
export default MessageAppBar;
