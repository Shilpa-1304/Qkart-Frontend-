import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import {
  InputAdornment,
  TextField
} from "@mui/material";

import {useHistory} from "react-router-dom";


const ProductHeader=(props)=>{

  let history=useHistory();

  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
    history.push("/");
  }
  return <>

  {props.logged&&

<Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon" onClick={()=>history.push('/')}></img>
        </Box>

      
        <Box sx={{ width: 1/3 }}>
        <TextField
          className="search-desktop"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Search for items/categories"
          name="search"
          value={props.string}
          onChange={props.handler}
        />
        </Box>

      <Stack direction="row" spacing={2}>
        <Avatar alt={localStorage.getItem('username')} src="../../public/avatar.png" />
        <span>{localStorage.getItem('username')}</span>
        <Button
          className="button"
          variant="contained"
          onClick={() => handleLogout() }
        >
          LOGOUT
        </Button>
      </Stack>
    </Box>
  }

{!props.logged&&

<Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon" onClick={()=>history.push('/')}></img>
        </Box>

        <Box sx={{ width: 1/3 }}>
        <TextField
          className="search-desktop"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Search for items/categories"
          name="search"
          value={props.string}
          onChange={props.handler}
        />
        </Box>
     

      <Stack direction="row" spacing={2}>
      <Button
          className="button"
          variant="contained"
          onClick={()=>history.push("/login")}
        >
          LOGIN
        </Button>
        <Button
          className="button"
          variant="contained"
              onClick={()=>history.push("/register")}
        >
        REGISTER
        </Button>
      </Stack>
    </Box>
  }

  </>

}



const Header = ({ children, hasHiddenAuthButtons, searchHandler,searchString}) => {

  let history=useHistory();
    return (
    <>

    {children!=="products"&&
    <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"  onClick={()=>history.push('/')}></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>history.push("/")}
        >
          Back to explore
        </Button>
      </Box>
    }  

    {children==="products"&&<ProductHeader logged={hasHiddenAuthButtons} handler={searchHandler} string={searchString}/>
    }
      </>
    );
};

export default Header;
  