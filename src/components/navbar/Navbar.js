import React from 'react';

import Notification from '../img/notification.png';
import Message from '../img/message.png';
import Settings from '../img/settings.png';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'> Noti App </span>
        <div className='icons'>
            <div className='icon'>
                <img src={Notification} className='iconImg' alt='' />
                <div className='counter'>2</div>
            </div>
            <div className='icon'>
                <img src={Message} className='iconImg' alt='' />
                <div className='counter'>2</div>
            </div>
            <div className='icon'>
                <img src={Settings} className='iconImg' alt='' />
                <div className='counter'>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;