import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { CONTACT_INFO } from '../../utils/constants';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)',
          zIndex: -1,
        }}
      />

      {/* Floating Elements */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                color="primary"
                sx={{ mb: 2, fontWeight: 500 }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '3rem', md: '4rem' },
                  lineHeight: 1.2,
                }}
              >
                Pareshkumar{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Parmar
                </Box>
              </Typography>

              <Box sx={{ height: 60, mb: 3 }}>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                      2000,
                      'DevOps Engineer',
                      2000,
                      'Cloud Specialist',
                      2000,
                      'Tech Enthusiast',
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </Typography>
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 500 }}
              >
                Building scalable web applications with Laravel, React, and cloud infrastructure.
                Currently pursuing Master's in IT at CQU with 5+ years of professional experience.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('projects')}
                    sx={{
                      background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    View Projects
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </motion.div>
              </Stack>

              {/* Social Links */}
              <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
                {[
                  { icon: <GitHubIcon />, href: CONTACT_INFO.github, label: 'GitHub' },
                  { icon: <LinkedInIcon />, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                  { icon: <EmailIcon />, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: 'primary.main',
                        width: 48,
                        height: 48,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      {social.icon}
                    </Avatar>
                  </motion.a>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Main Avatar/Image */}
              <Box
                sx={{
                  width: { xs: 300, md: 400 },
                  height: { xs: 300, md: 400 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(156, 39, 176, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* You can add your photo here */}
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                  alt="Pareshkumar Parmar"
                  sx={{
                    width: '90%',
                    height: '90%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />

                {/* Rotating Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '50%',
                    padding: '4px',
                    background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  }}
                />
              </Box>

              {/* Floating Tech Badges */}
              {[
                { label: 'React', top: '10%', left: '5%' },
                { label: 'Laravel', top: '20%', right: '5%' },
                { label: 'AWS', bottom: '30%', left: '0%' },
                { label: 'Docker', bottom: '10%', right: '15%' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    position: 'absolute',
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                    bottom: badge.bottom,
                  }}
                >
                  <Chip
                    label={badge.label}
                    sx={{
                      bgcolor: 'rgba(33, 150, 243, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      backdropFilter: 'blur(10px)',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;