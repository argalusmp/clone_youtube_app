import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Feed,Navbar, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar/> 
      <Routes> 
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>

      </Routes>
    </Box>  
  </BrowserRouter>
)

export default App
