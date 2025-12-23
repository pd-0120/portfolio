import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Storage, 
  Security,
  Build,
  Settings,
  Timeline,
  Terminal,
  CheckCircle,
  LocationOn,
  Work,
  School,
} from '@mui/icons-material';
import SectionWrapper from '../Shared/SectionWrapper';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const specialties = [
    { icon: <Code />, title: 'Full-Stack Development', description: 'End-to-end web application development' },
    { icon: <Cloud />, title: 'Cloud Architecture', description: 'AWS, Azure, and cloud infrastructure' },
    { icon: <Storage />, title: 'Database Design', description: 'SQL & NoSQL database optimization' },
    { icon: <Security />, title: 'Security', description: 'Secure authentication and data protection' },
    { icon: <Build />, title: 'DevOps', description: 'CI/CD pipelines and containerization' },
    { icon: <Settings />, title: 'API Development', description: 'RESTful and GraphQL APIs' },
  ];

  const stats = [
    { label: 'Projects Completed', value: '25+', color: theme.palette.primary.main },
    { label: 'Years Experience', value: '5+', color: theme.palette.secondary.main },
    { label: 'Technologies', value: '15+', color: theme.palette.success.main },
    { label: 'Happy Clients', value: '100%', color: theme.palette.warning.main },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Started Professional Journey',
      description: 'Began career as Junior Developer',
      icon: <Work />,
    },
    {
      year: '2021',
      title: 'Team Lead Promotion',
      description: 'Led development teams and projects',
      icon: <Timeline />,
    },
    {
      year: '2023',
      title: 'Senior Developer Role',
      description: 'Managed international client projects',
      icon: <Terminal />,
    },
    {
      year: '2024',
      title: 'Australian Experience',
      description: 'Working in Sydney with Australian companies',
      icon: <LocationOn />,
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Passionate developer focused on creating scalable solutions"
      sx={{
        background: 'linear-gradient(135deg, rgba(10, 25, 41, 0.9) 0%, rgba(19, 47, 76, 0.7) 100%)',
      }}
    >
      <Grid container spacing={6}>
  {/* Introduction */}
  <Grid size={12}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          background:
            'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 4,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                  alt="Pareshkumar Parmar"
                  sx={{
                    width: 200,
                    height: 200,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 40px rgba(33, 150, 243, 0.3)',
                  }}
                />
              </motion.div>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Pareshkumar Parmar
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 3 }}>
              Full-Stack Developer & DevOps Engineer
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Hi, I'm Paresh! A passionate full-stack developer with 5+ years of
              experience building scalable web applications.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Currently pursuing my Master's in Information Technology at Central
              Queensland University while working in Sydney.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <Chip icon={<CheckCircle />} label="Available for Opportunities" color="success" variant="outlined" />
              <Chip icon={<LocationOn />} label="Sydney, Australia" color="info" variant="outlined" />
              <Chip icon={<Work />} label="Full Work Rights" color="warning" variant="outlined" />
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  </Grid>

  {/* Stats */}
  <Grid size={12}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h2" fontWeight={800}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </Grid>

  {/* Specialties */}
  <Grid size={12}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        My Specialties
      </Typography>

      <Grid container spacing={3}>
        {specialties.map((specialty) => (
          <Grid key={specialty.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div whileHover={{ y: -5 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{specialty.icon}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {specialty.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {specialty.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </Grid>

  {/* Timeline */}
  <Grid size={{ xs: 12, lg: 6 }}>
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" fontWeight={600}>
          My Journey
        </Typography>
        {/* timeline content unchanged */}
      </CardContent>
    </Card>
  </Grid>

  {/* Current Focus */}
  <Grid size={{ xs: 12, lg: 6 }}>
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" fontWeight={600}>
          Current Focus
        </Typography>
        {/* progress bars unchanged */}
      </CardContent>
    </Card>
  </Grid>
</Grid>

    </SectionWrapper>
  );
};

export default About;