import React from 'react'
import Asideblock from "./asideblock.jsx"
import Mainblock from "./mainblock.jsx"
export default function dashboard() {
  return (
       <>
       <section className="flex">
       <Asideblock/>
       <Mainblock />

       </section>
       </>
)
}
