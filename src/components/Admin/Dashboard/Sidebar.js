import React from 'react'
import 
{BsFillPersonVcardFill, BsPeopleFill, 
    BsFillClipboardMinusFill, BsFillGridFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h3 className='logo-sidebar'>LOGO</h3>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <a className= 'side-bar-title' href="/Dashboard">
                <li className='sidebar-list-item'>
                    <BsFillGridFill className='icon'/> Dashboard
                </li>
            </a>
            
            <a className='side-bar-title' href="/Users">
                <li className='sidebar-list-item'>
                    <BsPeopleFill className='icon'/> Users
                </li>
            </a>
            <a className='side-bar-title' href="/Owner">
                <li className='sidebar-list-item'>
                    <BsFillPersonVcardFill className='icon'/> Owner/Agents
                </li>
            </a>
            <a className='side-bar-title' href="/">
                <li className='sidebar-list-item'>
                    <BsFillClipboardMinusFill className='icon'/> Post space
                </li>
            </a>
        </ul>
    </aside>
  )
}

export default Sidebar