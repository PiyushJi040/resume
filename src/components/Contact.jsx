import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app, send to backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'jaiswalpiyush040@gmail.com',
      link: 'mailto:jaiswalpiyush040@gmail.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '9142143711',
      link: 'tel:9142143711',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bhubaneswar, India',
      link: null,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/piyush-jaiswal',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
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
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '8%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, #f093fb, #f5576c)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite reverse'
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
          Get In Touch 🚀
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
          Let's connect and discuss opportunities, ideas, or just chat about tech!
        </p>
        
        {/* Contact Methods Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {contactMethods.map((method, index) => (
            <div key={index} className="card floating-element" style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '20px',
              textAlign: 'center',
              cursor: method.link ? 'pointer' : 'default',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.8s ease ${index * 0.1 + 0.3}s, transform 0.8s ease ${index * 0.1 + 0.3}s`,
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => method.link && window.open(method.link, '_blank')}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: method.gradient
              }} />
              
              <div style={{
                fontSize: '2.5rem',
                background: method.gradient,
                borderRadius: '15px',
                padding: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                marginBottom: '1rem'
              }}>
                <span style={{ filter: 'brightness(0) invert(1)' }}>{method.icon}</span>
              </div>
              <h3 style={{
                background: method.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                {method.title}
              </h3>
              <p style={{
                color: '#666',
                margin: 0,
                fontSize: '1rem'
              }}>
                {method.value}
              </p>
            </div>
          ))}
        </div>
        
        {/* Main Contact Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem'
        }}>
          {/* Contact Form */}
          <div className="card" style={{ 
            background: 'white', 
            padding: '2.5rem', 
            borderRadius: '20px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }} />
            
            <h2 style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              fontSize: '1.8rem',
              fontWeight: 'bold'
            }}>
              Send a Message ✉️
            </h2>
            
            {isSubmitted && (
              <div style={{ 
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
                marginBottom: '1rem',
                animation: 'fadeInUp 0.5s ease'
              }}>
                ✓ Message sent successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'name' ? '#667eea' : '#ddd'}`,
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    background: focusedField === 'name' ? 'rgba(102,126,234,0.05)' : 'white'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'email' ? '#667eea' : '#ddd'}`,
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    background: focusedField === 'email' ? 'rgba(102,126,234,0.05)' : 'white'
                  }}
                />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'message' ? '#667eea' : '#ddd'}`,
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    background: focusedField === 'message' ? 'rgba(102,126,234,0.05)' : 'white'
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                🚀 Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            padding: '2.5rem', 
            borderRadius: '20px', 
            color: 'white',
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1.5rem',
              animation: 'pulse 2s infinite'
            }}>
              👋
            </div>
            <h2 style={{ 
              marginBottom: '1.5rem',
              fontSize: '1.8rem',
              fontWeight: 'bold'
            }}>
              Let's Work Together!
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Whether you're looking for a developer, have a question, or just want to connect, I'd love to hear from you!
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <strong>🕰️ Response Time:</strong> Usually within 24 hours
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <strong>🌍 Availability:</strong> Open to remote opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;