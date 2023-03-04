import React from 'react'
import { Container , Grid } from '@mui/material'
import "./Contact.css"

function Contact() {
  return (
    <div className='Contact'>
        <Container maxWidth="xl">
            <div className="box">
                <h2 className="title">Contact with us.</h2>
                <p className="text">More than 50,000+ companies trusted our business</p>
                <form action="#">
                    <input type="text" placeholder='Type your messages..' />
                    <button>Get Started</button>  
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Contact