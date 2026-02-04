import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: 'HTML', icon: '🏷️', level: 95, color: '#E34F26' },
    { name: 'CSS', icon: '🎨', level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: '⚡', level: 88, color: '#F7DF1E' },
    { name: 'React.js', icon: '⚛️', level: 85, color: '#61DAFB' },
    { name: 'Bootstrap', icon: '🅱️', level: 80, color: '#7952B3' },
    { name: 'jQuery', icon: '💡', level: 75, color: '#0769AD' }
  ];
  const backendSkills = [
    { name: 'Node.js', icon: '🌐', level: 85, color: '#339933' },
    { name: 'Express.js', icon: '🚀', level: 80, color: '#000000' },
    { name: 'PHP', icon: '🐘', level: 75, color: '#777BB4' },
    { name: 'Java', icon: '☕', level: 70, color: '#ED8B00' },
    { name: 'Python', icon: '🐍', level: 72, color: '#3776AB' }
  ];
  const databaseSkills = [
    { name: 'MySQL', icon: '🗄️', level: 80, color: '#4479A1' },
    { name: 'PostgreSQL', icon: '🐘', level: 75, color: '#336791' }
  ];
  const cloudSkills = [
    { name: 'API', icon: '🔌', level: 85, color: '#FF6B6B' },
    { name: 'EC2', icon: '☁️', level: 70, color: '#FF9900' },
    { name: 'S3', icon: '💾', level: 75, color: '#569A31' }
  ];
  const otherSkills = [
    { name: 'Git', icon: '📁', level: 90, color: '#F05032' },
    { name: 'MongoDB', icon: '🐵', level: 78, color: '#47A248' },
    { name: 'EJS', icon: '📄', level: 80, color: '#90A93A' },
    { name: 'Redux', icon: '🔄', level: 75, color: '#764ABC' },
    { name: 'Axios', icon: '📡', level: 85, color: '#5A29E4' },
    { name: 'JWT', icon: '🔐', level: 80, color: '#000000' },
    { name: 'Recharts', icon: '📊', level: 70, color: '#8884D8' }
  ];

  const categories = [
    { title: 'Frontend', skills: frontendSkills, icon: '🎨', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { title: 'Backend', skills: backendSkills, icon: '⚙️', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { title: 'Database', skills: databaseSkills, icon: '🗄️', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { title: 'Cloud & Others', skills: [...cloudSkills, ...otherSkills], icon: '☁️', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
  ];

  const SkillBar = ({ skill, index, categoryIndex }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);
    
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, (categoryIndex * 200) + (index * 100));
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index, categoryIndex]);

    return (
      <div style={{
        marginBottom: '1rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.6s ease ${(categoryIndex * 0.2) + (index * 0.1) + 0.5}s, transform 0.6s ease ${(categoryIndex * 0.2) + (index * 0.1) + 0.5}s`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600',
            color: skill.color
          }}>
            <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
            {skill.name}
          </span>
          <span style={{ 
            fontSize: '0.9rem', 
            color: '#666',
            fontWeight: 'bold'
          }}>
            {animatedLevel}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${animatedLevel}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
            borderRadius: '10px',
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              animation: animatedLevel > 0 ? 'shimmer 2s infinite' : 'none'
            }} />
          </div>
        </div>
      </div>
    );
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
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%',
        width: '150px',
        height: '150px',
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
          Skills & Expertise ✨
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
          Technologies I work with and my proficiency levels
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="card" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 1s ease ${catIndex * 0.2 + 0.3}s, transform 1s ease ${catIndex * 0.2 + 0.3}s`,
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: category.gradient
              }} />
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{ 
                  fontSize: '2.5rem',
                  background: category.gradient,
                  borderRadius: '15px',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '60px',
                  minHeight: '60px'
                }}>
                  <span style={{ filter: 'brightness(0) invert(1)' }}>{category.icon}</span>
                </div>
                <h2 style={{ 
                  background: category.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '1.8rem',
                  margin: 0,
                  fontWeight: 'bold'
                }}>
                  {category.title}
                </h2>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                    categoryIndex={catIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Skills;