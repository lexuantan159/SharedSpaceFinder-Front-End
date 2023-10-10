import { useState } from 'react'
import './Admin.css'
import Content from '../components/Admin/Dashboard/Content'
import Header from '../components/Admin/Dashboard/Header'
import Sidebar from '../components/Admin/Dashboard/Sidebar'


function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return ( 
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Content />
    </div>
  )
}

export default Admin