import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aboutCards = [
    {
      icon: '🎓',
      title: 'Education & Passion',
      description: "I'm a motivated B.Tech CSE student passionate about creating efficient software solutions. Skilled in full-stack development and data analysis.",
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '💼',
      title: 'Projects & Experience',
      description: "I've built projects like PitchPal (real-time emergency locator app) and CraftHaven (handmade crafts marketplace)—handling everything from frontend to backend. Currently, I'm developing an admin dashboard using React, further enhancing my frontend skills.",
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🚀',
      title: 'Innovation & Growth',
      description: 'Always exploring new technologies and methodologies to create impactful solutions. I believe in continuous learning and adapting to the ever-evolving tech landscape.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

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
        top: '15%',
        right: '10%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 7s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, #f093fb, #f5576c)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 5s ease-in-out infinite reverse'
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
          About Me ✨
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
        }}>
          Get to know more about my journey, passion, and aspirations
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Left Column - About Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {aboutCards.map((card, index) => (
              <div key={index} className="card floating-element" style={{ 
                padding: '2rem', 
                background: 'white', 
                borderRadius: '20px', 
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transitionDelay: `${index * 0.2 + 0.3}s`,
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: card.gradient
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem',
                    background: card.gradient,
                    borderRadius: '15px',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '60px',
                    minHeight: '60px',
                    transform: hoveredCard === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <span style={{ filter: 'brightness(0) invert(1)' }}>{card.icon}</span>
                  </div>
                  <h3 style={{ 
                    background: card.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {card.title}
                  </h3>
                </div>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6',
                  color: '#555',
                  margin: 0
                }}>
                  {card.description}
                </p>
              </div>
            ))}
            
            {/* Contact Card */}
            <div className="card" style={{ 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              borderRadius: '20px',
              color: 'white',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 1s ease 0.9s, transform 1s ease 0.9s'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Let's Connect! 🤝</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                <a href="mailto:jaiswalpiyush040@gmail.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                  📧 jaiswalpiyush040@gmail.com
                </a>
              </p>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                📱 Phone: 9142143711
              </p>
            </div>
          </div>
          
          {/* Right Column - Image with decorative elements */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 1s ease 0.6s, transform 1s ease 0.6s',
            position: 'relative'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="/about_image.jpg" 
                alt="Piyush Jaiswal About" 
                className="glow-on-hover"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  border: '4px solid white'
                }}
              />
              {/* Decorative elements around image */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '30px',
                height: '30px',
                background: 'linear-gradient(45deg, #f093fb, #f5576c)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '-10px',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite 0.5s'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;