import { useState } from 'react'
import '../Admin.css'
import Header from '../../components/Admin/Dashboard/Header'
import Sidebar from '../../components/Admin/Dashboard/Sidebar'
import OwnerContent from '../../components/Admin/Owner/OwnerContent'
//import { useNavigate } from "react-router-dom";


function Owner() {
  //const navigate = useNavigate();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return ( 
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <OwnerContent/>
    </div>
  )
}

export default Owner