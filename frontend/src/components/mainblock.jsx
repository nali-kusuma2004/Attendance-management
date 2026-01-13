import React from 'react'
import Cards from "./cards.jsx"
import Liveattendance from "./liveattendance.jsx"
import Quick from "./quick.jsx"

export default function Mainblock() {
    const cards=[
        {name:"Total Staff",content:"100" ,url:"/staff"},
        {name:"Total Students",content:"3000",url:""},
        {name:"Today Present",content:"2453",url:""}, 
        {name:"Absent",content:"647",url:""},
        {name:"Attendance",content:"92%",url:""},
        {name:"Late Entries",content:"",url:""},
        {name:"On leave",content:"",url:""},
        {name:"Biometrics Scans ",content:"",url:""},
        {name:"Device Status",content:"",url:""},
        {name:"finger print Quality",content:"",url:""},
        {name:"Failed Scans",content:"",url:""}
    ]
  return (
        <section className="w-5/6 h-1/3 bg-gray-100 ">
            {/* cards */}
            <div className="flex flex-wrap">
            {cards.map((item)=>(
                <Cards  name={item.name} value={item.content} url={item.url}/>
            ))}
            </div>
             {/* live attendance */} <Liveattendance />
             {/* quick action */} <Quick />
        </section>
  )
}
