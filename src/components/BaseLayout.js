//import React, {useState} from 'react';
import React from 'react';
import {Box, Grid} from "@mui/material";
//import Style from './BaseLayout.module.scss'
//import Navbar from "./Navbar";
import MessageAppBar from "./common/MessageAppBar"
import './BaseLayout.css'
import AnimatedRoutes from './AnimatedRoutes';
//import Appbar from './common/Appbar';

export default function BaseLayout() {
   //let [darkMode, setDarkMode] = useState(false);


   //function handleClick() {
   //   setDarkMode(!darkMode);
   //}

   return (
      //<Box className={darkMode ? 'dark' : 'light'}>
      <Box>
      {/*//<Box className={darkMode ? Style.dark : Style.light}>*/}
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               {/*<Appbar/>*/}
               <MessageAppBar/>
               {/*<Navbar darkMode={darkMode} handleClick={handleClick}/>*/}
            </Grid>
            <Grid item flexGrow={1}>
               <AnimatedRoutes/>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  {/*<p> created by <a href={'"https://javierfonsi.github.io/Portafolio-JF/"'}>Javier Fonseca</a></p>*/}
                  <p>&copy; 2022 Evotech Ingenieria. All Rights reserved.</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

