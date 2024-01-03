import React, {useContext, useEffect, useRef, useState} from "react";
import HeaderStats from "../dashboardAdmin/Stats";
import CardBarChart from "../dashboardAdmin/ChartStats";
import * as dashboard from "../../services/dashboard";
import MethodContext from "../../context/methodProvider";
import {useLocation, useNavigate} from "react-router-dom";

const Dashboard = () => {
    const fetchData = useRef();
    const {notify} = useContext(MethodContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState({});


    fetchData.current = async () => {
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const data = await dashboard.getDashboard(accessToken);
        console.log("🚀 ~ fetchData.current= ~ data:", data);

        setData(() => data?.data?.countOverview || {});
    };
    useEffect(() => {
        fetchData.current();
    }, []);

    useEffect(() => {
        if (location.state?.toastMessage !== '') {
            notify(location.state?.toastMessage, location.state?.statusMessage);
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, []);

    return (
        <div className="bg-lightBlue-600">
            <div>
                <h2 className="text-3xl font-bold">Bảng điều khiển</h2>
                <HeaderStats data={data}></HeaderStats>
            </div>
            <div className="pb-5">
                <h2 className="mb-5 text-3xl font-bold">Statics</h2>
                <CardBarChart data={data}></CardBarChart>
            </div>
            <div className="">
                <h2 className="my-5 text-3xl font-bold">Recent Post</h2>
                <table className="w-full table-auto bg-white">
                    <thead>
                    <tr className="flex w-full bg-gray-100">
                        <th className="flex-1 border p-2 text-black ">ID</th>
                        <th className="flex-1 border p-2 text-black ">Created by</th>
                        <th className="flex-1 border p-2 text-black ">
                            Title Workingspace
                        </th>
                        <th className="flex-1 border p-2 text-black ">
                            Create post space
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            1
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Mit Blue
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            vuacatxe@gmail.com
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            012391238
                        </td>
                    </tr>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            2
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Mit Red
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            vuacatxe@gmail.com
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            092848421
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
