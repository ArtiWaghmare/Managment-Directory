import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

 function Layout() {
  return (
    
   
    <div class="row">
    <div class="col-2"><Sidebar/></div>
      <div class="col"><Navbar/></div>
     
    </div>
   
  
  )
}
export default Layout;