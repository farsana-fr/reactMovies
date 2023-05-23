import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div >
        <Navbar bg="dark" variant="dark">
        <Container className='p-3'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="data:image/png;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong className='fs-3'>MovieHub</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header