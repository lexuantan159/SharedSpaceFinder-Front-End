import { useState } from 'react'
import '../Admin.css'
import Header from '../../components/Admin/Dashboard/Header'
import Sidebar from '../../components/Admin/Dashboard/Sidebar'
import UserContent from '../../components/Admin/User/UserContent'



function User() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return ( 
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <UserContent/>
    </div>
  )
}

export default User