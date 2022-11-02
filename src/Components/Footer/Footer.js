import React from 'react';

const date = new  Date();
const currentYear =date.getFullYear();

const Footer = () => {
    return (
        <div>
            <footer>
              <div sticky='bottom' style={{textAlign: 'center'}}>
              <p style={{color:'#4c4848'}}>
                ©  Copyright {currentYear} All Rights Reserved.
                </p>
              </div>
                </footer>
          
        </div>
    );
};

export default Footer;