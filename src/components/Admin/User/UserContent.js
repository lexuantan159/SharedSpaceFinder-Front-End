import React from 'react'
import TableUser from '../User/TableUser';
function UserContent() {

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>Management User Account</h2>
        </div>
        <div>
          <TableUser></TableUser>
        </div>
    </main>
  )
}

export default UserContent