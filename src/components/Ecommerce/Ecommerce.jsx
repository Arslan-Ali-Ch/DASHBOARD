import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPermitiveDot, GoPrimitiveDot} from 'react-icons/go';
import {earningData,SparklineAreaData} from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider';
import Bg from  '../../data/welcome-bg.svg';
import './Ecommerce.css';
import { Button } from '@mui/material';
import { BarChart,Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Ecommerce = () => {

    
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 2500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 3580,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className='mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
           
           {/*set background and eraning data */}
            <div 
             className='setbg bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-cover bg-center '>
             <div className='flex justify-between items-center'>
                <div>
                <p className='font-bold text-gray-400'>Earnings</p>
                <p className='text-2xl'>#44,444,555</p>
                </div>
            </div>
            <div className='mt-6'>
                <Button sx={{color:'white',backgroundColor:'blue', borderRadius:'10px'}}>
                    Download
                </Button>
            </div>

            </div>
            {/* set 4 carts divs for data*/}
            <div className='flex m-3 flex-wrap 
            justify-center gap-1 items-center'>
                {
                    earningData.map((item,index)=>(
                        <div key={index}
                        className='bg-white dark:text-gray-200
                        dark:bg-secondary-dark-bg md:w-56
                        p-4 pt-9 rounded-2xl'>

                          <button
                          type='button'
                          style={{color:item.iconColor,backgroundColor:item.iconBg}}
                          className='text-2xl opacity-0.9 rounded-full p-4
                          hover:drop-shadow-xl'
                          >
                            {item.icon}
                        </button>
                         <p className='mt-3'>
                            <span className='text-lg font-semibold'>
                                {item.amount}
                            </span>
                            <span className={`text-sm text-${item.pcColor} ml-2`}>
                                {item.percentage}

                            </span>
                        </p>
                        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>     
                        </div>
                    ))
                }

            </div>
        </div>

        {/** div for charts */}
        {/*container for charts */}
                
        <div className='flex gap-10 flex-wrap
        justify-center'>
            {/** container for charts with bg and width */}
        
            <div className='bg-white 
            dark:text-gray-200 dark:bg-secondary-dark m-3 p-4 rounded-2xl md:w-780'>
                {/** container for revenue section*/}
        
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>
                        Revenue Updates

                    </p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-2
                        text-gray-600 hover:drop-shadow-xl'>
                            <span><GoPrimitiveDot/></span>
                            <span>Expense</span>
                        </p>
                        <p className='flex items-center gap-2
                        text-green-600 hover:drop-shadow-xl'>
                            <span><GoPrimitiveDot/></span>
                            <span>Budget</span>
                        </p>
                    </div>
                </div>
{/** container for actual charts */}
        <div className='mt-10 flex gap-10 flex-wrap justify-center'>
               {/** container for left chart */}
        
                <div className='border-r-1
                    border-color m-4 pr-10'>
                    <div >
                     <p>
                        <span className='text-3xl font-semibold'>$89,333,222</span>
                        <span className='p-1.5  hover:drop-shadow-xl
                        cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>22%</span>
                        </p>
                        <p className='text-gray-400 mt-1'>Budget</p>

                    </div>
                  <div className='mt-8'>
                    <p>
                        <span className='text-3xl font-semibold'>$89,333</span>
                    </p>
                    <p className='text-gray-400 mt-1'>Expense</p>

                 </div>
                  <div className='mt-8 flex justif-center'>
                    {/**line chart come here */}
                    <LineChart width={200} margin={{left:5,right:5,top:10}}
                     height={100} data={data}>
                     <Tooltip/>
                     <Line type="monotone"  dataKey="uv" stroke="#8884d8" strokeWidth={2}  activeDot={{ r: 8 }}/>
                    </LineChart>
                    
                    </div>
                    <div className='mt-8'>
                    <Button sx={{color:'white',backgroundColor:'blue', borderRadius:'10px'}}>
                    Download Report
                    </Button>
                    </div>

                </div>
                {/**right chart */}
                <div>
                <BarChart
          width={320}
          height={360}
          data={data}
          margin={{
            top: 5,
           
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar stackId="a" dataKey="pv" fill="#8884d8" />
          <Bar stackId="a" dataKey="uv" fill="#82ca9d" />
        </BarChart>
                </div>
        </div>


            </div>

        </div>
       
      
    </div>
  )
}

export default Ecommerce
