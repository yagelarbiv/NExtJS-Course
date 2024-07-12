"use client"

import { useState } from 'react'

function DashboardPage() {
console.log("Dashboard client component");


const [name, setName] = useState("");

  return (
    <div>
      <div>DashBoard Page</div>
      <label htmlFor="name">Name:</label>
      <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default DashboardPage