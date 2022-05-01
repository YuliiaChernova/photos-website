import React from 'react';
import { Link } from 'gatsby';
import { GrApps } from '@react-icons/all-files/gr/GrApps';
import { FaRegUserCircle } from '@react-icons/all-files/fa/FaRegUserCircle';
import { HiPhone } from '@react-icons/all-files/hi/HiPhone';

const links = [
  { icon: <GrApps />, to: '/' },
  { partiallyActive: true, icon: <FaRegUserCircle />, to: '/about' },
  { partiallyActive: true, icon: <HiPhone />, to: '/contact' }
];

const NavLinks = () => (
  <ul>
    {
      links.map(link => (
        <li key={link.to}>
          <Link
            partiallyActive={link.partiallyActive}
            activeClassName='active'
            to={link.to}
          >{link.icon}</Link>
        </li>
      ))
    }
  </ul>
);

export default NavLinks;