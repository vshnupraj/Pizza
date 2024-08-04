import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <XIcon />
        </div>
        <p>&copy; 2024 pedrotechpizza.com</p>
      
    </div>
  )
}

export default Footer
