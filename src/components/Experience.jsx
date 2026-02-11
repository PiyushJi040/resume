import { useState, useEffect } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Teachnook',
      duration: '01/01/2024 - 29/02/2024',
      description: [
        'Created web applications leveraging HTML, CSS, and JavaScript technologies.',
        'Conducted research on emerging technologies to enhance existing web solutions.',
        'Managed source code changes through version control systems like Git.'
      ],
      icon: '💻',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Customer Service Cashier',
      company: 'Jaiswal Store',
      duration: '01/02/2021 - 01/02/2023',
      description: [
        'Handled customer transactions and provided excellent service.',
        'Managed daily operations and inventory tracking.'
      ],
      icon: '💰',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'B.Tech in Computer Science & Engineering',
      company: "Shiksha 'O' Anusandhan",
      duration: 'Ongoing',
      description: [
        'CGPA: 9.52',
        'Focused on full-stack development, data structures, and software engineering principles.'
      ],
      icon: '🎓',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const achievements = [
    {
      text: 'Team leader, represented my team and won 2nd position at IDEATHON.',
      icon: '🏆',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      text: 'Got 2nd position in IIT Indore in its eSummit 25 where my team made an application for travelling and booking using Mapple API and we also used machine learning model to detect traffic and identify vehicles and a gamification feature.',
      icon: '🏅',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      text: 'With my team participated in the Skill India Hackathon 2025 and made a health related application using blockchain to store data and machine learning model to detect disease using just a simple photo of that disease. It will also show the nearest doctor and medicine in stock, also you can book the medicine. We plan to develop it and make it launch globally.',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
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
        top: '25%',
        right: '8%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 7s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '90px',
        height: '90px',
        background: 'linear-gradient(45deg, #f093fb, #f5576c)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 5s ease-in-out infinite reverse'
      }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Achievements Section */}
        <div style={{ 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem'
          }}>
            Achievements ✨
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {achievements.map((ach, index) => (
              <div key={index} className="card floating-element" style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${index * 0.2 + 0.3}s, transform 0.8s ease ${index * 0.2 + 0.3}s`,
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredCard(`ach-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: ach.gradient
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem',
                    background: ach.gradient,
                    borderRadius: '15px',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '60px',
                    minHeight: '60px',
                    transform: hoveredCard === `ach-${index}` ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <span style={{ filter: 'brightness(0) invert(1)' }}>{ach.icon}</span>
                  </div>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#555',
                    margin: 0,
                    flex: 1
                  }}>
                    {ach.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Experience Section */}
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
        }}>
          Experience & Education 💼
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {experiences.map((exp, index) => (
            <div key={index} className="card floating-element" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.8s ease ${index * 0.2 + 0.7}s, transform 0.8s ease ${index * 0.2 + 0.7}s`,
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredCard(`exp-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: exp.gradient
              }} />
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  fontSize: '2.5rem',
                  background: exp.gradient,
                  borderRadius: '15px',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '60px',
                  minHeight: '60px',
                  transform: hoveredCard === `exp-${index}` ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{ filter: 'brightness(0) invert(1)' }}>{exp.icon}</span>
                </div>
                <div>
                  <h2 style={{ 
                    background: exp.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {exp.title}
                  </h2>
                  <h3 style={{ 
                    color: '#666', 
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: '500'
                  }}>
                    {exp.company} | {exp.duration}
                  </h3>
                </div>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} style={{ 
                    marginBottom: '0.8rem', 
                    lineHeight: '1.6',
                    color: '#555',
                    fontSize: '1.1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.5rem',
                      width: '8px',
                      height: '8px',
                      background: exp.gradient,
                      borderRadius: '50%'
                    }} />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;