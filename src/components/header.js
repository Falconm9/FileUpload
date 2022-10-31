import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Upload PE</h1>
    </header>
  );
}

const headerStyle= {
  backgroundColor: "#93baca",
  maxHeight: '20vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0b111e'
}

export default Header;
