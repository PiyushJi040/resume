import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/experience', label: 'Experience', icon: '💼' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #9370DB, #800080)',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.textShadow = 'none';
      }}
      >
        Piyush Jaiswal ✨
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '1rem'
      }}>
        {navItems.map((item, index) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                background: location.pathname === item.path ? 'rgba(255,255,255,0.2)' : 'transparent',
                transform: hoveredItem === index ? 'translateY(-3px) scale(1.1)' : 'translateY(0) scale(1)',
                boxShadow: hoveredItem === index ? '0 5px 15px rgba(255,255,255,0.2)' : 'none'
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;