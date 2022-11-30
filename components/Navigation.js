import React from 'react';
import Link from 'next/link';

function Navigation(props) {
    return (
        <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><Link class="nav-link scrollto active" href="#hero">Home</Link></li>
          <li><Link class="nav-link scrollto" href="#about">About</Link></li>
          <li><Link class="nav-link scrollto" href="#services">Services</Link></li>
          <li><Link class="nav-link scrollto " href="#portfolio">Portfolio</Link></li>
          <li><Link class="nav-link scrollto" href="#testimonials">Testimonials</Link></li>
          <li><Link class="nav-link scrollto" href="#contact">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    );
}

export default Navigation;