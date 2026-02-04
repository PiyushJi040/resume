import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Admin Dashboard',
      description: 'A role based admin dashboard for Managing users, products and analytics.',
      tech: ['React.js', 'React Router', 'Redux', 'Recharts', 'Axios', 'JWT'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '📊',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'PitchPal (Emergency Services Locator)',
      description: 'A location based web app to find nearby emergency resources.',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '🚨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'CraftHaven (Arts and Crafts Marketplace)',
      description: 'A full stack marketplace for buying, selling and promoting handmade products.',
      tech: ['React.js', 'Node.js', 'Express.js', 'SQL'],
      github: 'https://github.com/HUNT136',
      live: 'https://craft-haven-black.vercel.app/',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce interface with backend basics.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'SQL'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Blog Application',
      description: 'Dynamic blog with restful routing.',
      tech: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '📝',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'Two player browser game with win detection.',
      tech: ['JavaScript'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '🎮',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      title: 'Hotstar Clone',
      description: 'Streaming service interface clone.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/HUNT136',
      live: 'https://hotstar-clone-b2mc.vercel.app/',
      icon: '📺',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      title: 'Calculator',
      description: 'Basic arithmetic calculator.',
      tech: ['JavaScript'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '🧮',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      title: 'Dice Game',
      description: 'A simple JavaScript game.',
      tech: ['JavaScript'],
      github: 'https://github.com/HUNT136',
      live: null,
      icon: '🎲',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    }
  ];

  const handleGoLive = (liveUrl) => {
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    } else {
      alert('Currently not live, please check details from GitHub.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '100px 2rem 2rem', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Floating background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '5%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, #f093fb, #f5576c)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite reverse'
      }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
          My Projects 🚀
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
        }}>
          A showcase of my development journey and technical skills
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {projects.map((project, index) => (
            <div key={index} className="card interactive-card" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${index * 0.1 + 0.3}s`,
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: project.gradient
              }} />
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  fontSize: '2.5rem',
                  background: project.gradient,
                  borderRadius: '15px',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '60px',
                  minHeight: '60px',
                  transform: hoveredProject === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ filter: 'brightness(0) invert(1)' }}>{project.icon}</span>
                </div>
                <h2 style={{ 
                  background: project.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {project.title}
                </h2>
              </div>
              
              <p style={{ 
                lineHeight: '1.6', 
                marginBottom: '1.5rem', 
                color: '#555',
                fontSize: '1.1rem'
              }}>
                {project.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: '2rem' 
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={{ 
                    background: project.gradient,
                    color: 'white', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center' 
              }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem'
                  }}
                >
                  📋 Details
                </a>
                <button 
                  onClick={() => handleGoLive(project.live)}
                  className="btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: project.live ? '#28a745' : '#6c757d',
                    borderColor: project.live ? '#28a745' : '#6c757d'
                  }}
                >
                  {project.live ? '🚀 Go Live' : '⏳ Coming Soon'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;