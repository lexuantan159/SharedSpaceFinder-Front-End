import React from "react";

const User = () => {
  const users = [
    {
      'id': 1, 
      'name': 'Hardik', 
      'email': 'haridik@gmail.com',
      'phone': '123012030',
      'address': 'da nang'
    },
    {
      'id': 2, 
      'name': 'Paresh', 
      'email': 'paresh@gmail.com',
      'phone': 123012030,
      'address': 'da nang'
    },
    {
      'id': 2, 
      'name': 'Karan', 
      'email': 'karan@gmail.com',
      'phone': '123012030',
      'address': 'da nang'
    },
];

    return (
    <div className="">
      <div>
        <h2 className="my-5 text-3xl font-bold">Management User Account</h2>
      </div>
      
   
          <table class="w-full table-auto bg-white">
            <thead>
              <tr className="flex w-full bg-gray-100">
                <th className="border flex-1 p-2 text-black ">ID</th>
                <th className="border flex-1 p-2 text-black ">Name</th>
                <th className="border flex-1 p-2 text-black ">Email</th>
                <th className="border flex-1 p-2 text-black ">Phone</th>
                <th className="border flex-1 p-2 text-black ">Address</th>
                {/* <th className="border flex-1 p-2 text-black ">Tùy Chọn</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="flex items-center h-16" data-index={index}>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.id}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.name}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.email}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.phone}</td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
        
    )
}

export default User;