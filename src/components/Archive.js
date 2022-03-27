import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'

export default function Archive() {
  const { dayNum } = useParams();
  return (
    <main>
      <Container>
        <h2 className='text-center'>Archive</h2>
        <Link to="/archive/day1">Day1</Link>
        <Link to="/archive/day2">Day2</Link>
        <Link to="/archive/day3">Day3</Link>
      </Container>
      <Outlet />
    </main>
  )
}
