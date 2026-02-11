import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingShape = ({ delay, size, color, duration }) => (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      background: color,
      borderRadius: '50%',
      opacity: 0.1,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      pointerEvents: 'none'
    }} />
  );

  return (
    <div style={{
      background: 'linear-gradient(135deg, #9370DB, #800080, #FF69B4)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      color: 'white',
      textAlign: 'center',
      paddingTop: '100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Background Elements */}
      <FloatingShape delay={0} size="100px" color="rgba(255,255,255,0.1)" duration={6} />
      <FloatingShape delay={2} size="150px" color="rgba(255,105,180,0.1)" duration={8} />
      <FloatingShape delay={4} size="80px" color="rgba(0,206,209,0.1)" duration={5} />
      
      {/* Interactive Cursor Effect */}
      <div style={{
        position: 'absolute',
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'all 0.1s ease',
        zIndex: 1
      }} />

      {/* Hero Section */}
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        maxWidth: '800px',
        zIndex: 2,
        position: 'relative'
      }}>
        <div style={{
          position: 'relative',
          display: 'inline-block',
          marginBottom: '2rem'
        }}>
          <img 
            src={`${import.meta.env.BASE_URL}profile_picture.jpg`}
            alt="Piyush Jaiswal Profile" 
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 0 10px rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              animation: 'pulse 3s infinite'
            }}
            className="glow-on-hover"
          />
          {/* Decorative rings around profile */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            animation: 'spin 20s linear infinite'
          }} />
        </div>
        
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '0.5rem',
          background: 'linear-gradient(45deg, #FFA500, #FF69B4, #00CED1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Hey, I'm <span style={{ color: '#FFA500' }}>Piyush Jaiswal</span> 👋
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Full-Stack Developer ✨
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          marginBottom: '2rem',
          textShadow: '0 1px 5px rgba(0,0,0,0.2)'
        }}>
          I'm a passionate B.Tech CSE student from building emergency locators to crafting beautiful marketplaces, bringing ideas to life through code. I thrive in dynamic teams, love learning, and am eager to apply my abilities to real-world tech challenges.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          <Link 
            to="/projects" 
            className="btn-primary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🚀 View Work
          </Link>
          <Link 
            to="/contact" 
            className="btn-outline"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            📧 Get In Touch
          </Link>
        </div>
      </div>

      {/* What I Do Section */}
      <div style={{
        width: '100%',
        padding: '4rem 2rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        marginTop: '4rem',
        borderRadius: '30px 30px 0 0',
        position: 'relative'
      }}>
        <h3 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '3rem', 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          What I Do 🎨
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {[
            {
              icon: '💻',
              title: 'Full-Stack Development',
              description: 'Building complete web applications from frontend interfaces to backend logic, bringing ideas to life through code.',
              delay: 0.8
            },
            {
              icon: '🚀',
              title: 'Project Building',
              description: 'From emergency locators to marketplaces, creating innovative solutions that solve real-world problems.',
              delay: 1.0
            },
            {
              icon: '👥',
              title: 'Team Collaboration',
              description: 'Thriving in dynamic teams, leading projects like hackathons, and contributing to successful outcomes.',
              delay: 1.2
            },
            {
              icon: '📚',
              title: 'Lifelong Learning',
              description: 'Passionate about emerging technologies, continuously enhancing skills in full-stack development and more.',
              delay: 1.5
            }
          ].map((item, index) => (
            <div key={index} className="card floating-element" style={{
              background: 'rgba(255,255,255,0.15)',
              padding: '2rem',
              borderRadius: '20px',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 1s ease ${item.delay}s, transform 1s ease ${item.delay}s`,
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                {item.icon}
              </div>
              <h4 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem', 
                color: 'white',
                textShadow: '0 2px 5px rgba(0,0,0,0.3)'
              }}>
                {item.title}
              </h4>
              <p style={{ 
                lineHeight: '1.6', 
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;