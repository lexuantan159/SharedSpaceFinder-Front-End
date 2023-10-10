import React from 'react'
import 
{ BsPersonFillGear, BsPeopleFill, BsFillClipboardMinusFill, BsFillPersonVcardFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import TablePost from './Table';
function Content() {

    const data = [
        {
          name: '',
          uv: 4000,
          number: 1,
          amt: 2400,
        },
        {
          name: '',
          uv: 3000,
          number: 30,
          amt: 2210,
        },
        {
          name: '',
          uv: 2000,
          number: 25,
          amt: 2290,
        },
        {
          name: '',
          uv: 2780,
          number: 50,
          amt: 2000,
        },
        
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>DASHBOARD</h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <p>Number of Admin account</p>
                    <BsPersonFillGear className='card_icon'/>
                </div>
                <div className='number-of-card'>
                  <h1>1</h1>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <p>Number of User account</p>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <div className='number-of-card'>
                  <h1>30</h1>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <p>Number of Owner/Agents account</p>
                    <BsFillPersonVcardFill className='card_icon'/>
                </div>
                <div className='number-of-card'>
                  <h1>25</h1>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <p>Number of Post space</p>
                    <BsFillClipboardMinusFill className='card_icon'/>
                </div>
                <div className='number-of-card'>
                  <h1>50</h1>
                </div>
            </div>
        </div>

        <div className='main-title'>
            <h2>STATICS</h2>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="200%" height="100%">
            <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 0,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="0 0" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="number" fill="blue" />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className='main-title'>
            <h2>RECENT POSTS</h2>
        </div>
        <div>
          <TablePost></TablePost>
        </div>
    </main>
  )
}

export default Content