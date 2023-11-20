import React from "react";
import anonAvatar from "../../assets/images/avatar.jpg";
import { HiOutlinePhoneMissedCall, HiOutlineDocumentAdd } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
const MessengeHome = () => {
  const contacts = [
    {
      name: "Hoàng",
      send_date: "1 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Luận",
      send_date: "2 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Tân",
      send_date: "3 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Quý",
      send_date: "4 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: " Xuân Hoàng",
      send_date: "4 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Luận 1",
      send_date: "5 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Tân 1",
      send_date: "5 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
    {
      name: "Tân 1",
      send_date: "5 giờ",
      conversation: "Hello",
      avatar: anonAvatar,
    },
  ];

  return (
    <div>
      <div className="flex h-screen">

            {/* sideBarleff */}
        <div className="h-full w-[25%] touch-pan-y overflow-auto border-r border-gray-200 bg-[#f3f5ff]">
          <h1 className=" text-3x1 px-6 py-2 text-xl font-medium text-primaryColor">
            {" "}
            Chat
          </h1>
          
          <div className="text-3x1 flex items-center justify-center border-b border-green-600 px-6 py-4">
            <input
              type="text"
              className="mx-4 rounded-full border border-gray-200 bg-gray-100 px-2 py-1 outline-none "
              placeholder="Tìm Kiếm"
            />
          </div>

          <div className="mx-2 mt-6">

            {contacts.map(({ name, conversation, send_date, avatar }) => {
              return (
                <div className="flex cursor-pointer items-center rounded-md py-2 hover:bg-gray-200 ">
                 
                  <div>
                    <img
                      src={avatar}
                      alt="avatar"
                      className="border-grey-200 h-[56px] w-[56px] rounded-full border-2 object-cover"
                    /> 
                    
                  </div>
                  
                  <div className="ml-4 flex-auto">
                    <h3 className="text-[15px] font-semibold">{name}</h3>
                    <div className="flex ">
                      <p className="mr-auto text-[13px] text-gray-600">
                        {conversation}
                      </p>
                      <span className="text-[13px] ">{send_date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>  {/* sideBarleff */}


                {/* body */}
        <div className="flex w-[75%] flex-col items-center bg-white">
              
          <div className="mb-4 mt-6 flex h-[70px] w-[60%] items-center rounded-full bg-[#f3f5ff] px-14">
            <div>
              <img
                src={anonAvatar}
                alt="avatar"
                className="border-grey-200 h-[60px] w-[60px] rounded-full border-2"
              />
            </div>
            <div className=" ml-4 mr-auto">
              <p className="text-[15px] font-bold">Hoàng</p>
              <span className="text-[13px] text-gray-600">online</span>
            </div>
            <div className="cursor-pointer">
              <span>
                <HiOutlinePhoneMissedCall size={24} />
              </span>
            </div>
          </div>

           {/* Messenge */}
          <div className="h-[75%] w-full touch-pan-y overflow-auto border-t">
            
            <div className="p-6">
              <div className="mb-6 max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#f3f5ff] p-4">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>

              <div className="mb-6 ml-auto max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#0084ff] p-4 text-white">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>
              <div className="mb-6 max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#f3f5ff] p-4">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>

              <div className="mb-6 ml-auto max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#0084ff] p-4 text-white">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>
              <div className="mb-6 max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#f3f5ff] p-4">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>

              <div className="mb-6 ml-auto max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#0084ff] p-4 text-white">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>
              <div className="mb-6 max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#f3f5ff] p-4">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>

              <div className="mb-6 ml-auto max-w-[45%] rounded-b-xl rounded-tr-xl bg-[#0084ff] p-4 text-white">
                Sở hữu bảng mã màu CSS chuẩn, bạn sẽ tự tin hơn khi thiết kế,
              </div>
            </div>

          </div>{/* Messenge */}

            {/* Type a messenge.... */}
          <div className="flex w-full items-center p-6 px-6">
            <div className="ml-auto ml-4 px-2 ">
              <HiOutlineDocumentAdd size={30} color="blue" />
            </div>
            <input
              type="text"
              className="w-[90%] rounded-full border border-gray-200 bg-[#f3f5ff] bg-gray-100 p-2 px-6 shadow-md outline-none focus:border-0 focus:ring-0"
              placeholder="Type a messenge...."
            />
            <div className="ml-4 px-2 ">
              <AiOutlineSend size={30} color="blue" />
            </div>
            
          </div>{/* Type a messenge.... */}

        </div> {/* body */}


      </div>
    </div>
  );
};

export default MessengeHome;
