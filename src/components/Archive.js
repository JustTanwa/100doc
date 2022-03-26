import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Archive() {
  return (
    <div>
        <h2>Archive</h2>
        <NavLink to="/day1">Day1</NavLink>
        <NavLink to="/day2">Day2</NavLink>
    </div>
  )
}
