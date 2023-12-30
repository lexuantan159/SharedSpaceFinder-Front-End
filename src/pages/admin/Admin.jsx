import React from 'react'
import { useState } from 'react'

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