import React from "react";
import HeaderStats from "../dashboardAdmin/Stats";
import CardBarChart from "../dashboardAdmin/ChartStats";

const Dashboard = () => {
    
    return (
        <div className="bg-lightBlue-600">
            <div>
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <HeaderStats></HeaderStats>
            </div>
            <div className="pb-5">
                <h2 className="mb-5 text-3xl font-bold">Statics</h2>
                <CardBarChart></CardBarChart>
            </div>
            <div className="">
                <h2 className="my-5 text-3xl font-bold">Recent Post</h2>
                <table class="w-full table-auto bg-white">
                    <thead>
                    <tr className="flex w-full bg-gray-100">
                        <th className="border flex-1 p-2 text-black ">ID</th>
                        <th className="border flex-1 p-2 text-black ">Created by</th>
                        <th className="border flex-1 p-2 text-black ">Title Workingspace</th>
                        <th className="border flex-1 p-2 text-black ">Create post space</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="flex items-center h-16">
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">1</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">Mit Blue</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">vuacatxe@gmail.com</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">012391238</td>
                    </tr>
                    <tr className="flex items-center h-16">
                    <td className="border px-2 flex-1 h-full flex justify-center items-center">2</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">Mit Red</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">vuacatxe@gmail.com</td>
                        <td className="border px-2 flex-1 h-full flex justify-center items-center">092848421</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;