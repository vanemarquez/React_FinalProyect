import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <html>
  {/* <h1>POPEYES</h1> */}

           <img
            src="../../public/images/logo_popeyes.png"
            alt="logo"
            />
    </html>
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home"> 
    //         <img
    //         className="d-block w-100"
    //         src="../../public/images/headerPopeyes.png"
    //         alt="logo"
    //         />
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>
  );
};

export default Header;