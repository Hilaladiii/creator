import React from 'react';

const Layout = ({ children, backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default Layout;