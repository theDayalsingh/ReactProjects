import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {
  MDBFooter
} from 'mdb-react-ui-kit';
import { SiFacebook,SiTwitter,SiLinkedin,SiGithub } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <MDBFooter className='bg-secondary text-center text-white'>
      <Container >
        <section className='mb-2'>
          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
          >
            <SiFacebook className='fs-4'/>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
          >
            <SiTwitter className='fs-4'/>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#fff' }}
            href='#!'
          >
            <FcGoogle className='fs-4'/>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
          >
            <SiLinkedin className='fs-4'/>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
          >
            <SiGithub className='fs-4'/>
          </Button>
        </section>
      </Container>

      <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright : VogueWay.com
      </div>
    </MDBFooter>
  )
}

export default Footer

