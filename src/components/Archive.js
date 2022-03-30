import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Archive() {
  const daysCompleted = [1, 2, 3, 4, 5];

  const buttonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    border: "2px double black",
    color: "black",
    backgroundColor: "white",
    margin: "0 1em 1em 0",
    textDecoration: "none"
  }
  const buttonStyleHover = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    border: "2px solid black" ,
    color: "white" ,
    backgroundColor: "black",
    margin: "0 1em 1em 0",
  }

  const handleMouseEnter = (e) => {
    for (let key in buttonStyleHover) {
      e.target.style[key] = buttonStyleHover[key];
    }
  }
  const handleMouseLeave = (e) => {
    for (let key in buttonStyle) {
      e.target.style[key] = buttonStyle[key];
    }
  }
  
  return (
    <main>
      <h2 className='text-center'>Journal Archive</h2>
      <Container fluid className="d-grid">
        <Row>
          <Col lg={2}>
            <p className="text-center" style={{
              fontSize: "1.25em",
              fontWeight: "600",
            }}
            >2022</p>
            <div style={{display: "flex", justifyContent: "start", flexWrap: "wrap", paddingLeft: "2em"}}>
              {daysCompleted.map((number) => {
                const to = "/archive/day" + number;
                return <Link to={to} className='d-inline-block text-center' style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{number}</Link>
              })}
            </div>
          </Col>
          <Col lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>

    </main>
  )
}
