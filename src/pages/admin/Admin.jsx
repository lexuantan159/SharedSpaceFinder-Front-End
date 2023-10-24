import React from 'react'
import { useState } from 'react'
import LayoutAdmin from '../../layouts/LayoutAdmin'

const Admin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return ( 
    <div className='grid-container'>
      
    </div>
  )

}

export default Admin