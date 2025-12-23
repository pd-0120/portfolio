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
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  School,
  LocationOn,
  CalendarToday,
  Grade,
  CheckCircle,
  AutoAwesome,
  Timeline,
  WorkspacePremium,
} from '@mui/icons-material';
import SectionWrapper from '../Shared/SectionWrapper';

const Education: React.FC = () => {
  const theme = useTheme();

  const educationData = [
    {
      degree: 'Master of Information and Technology',
      institution: 'Central Queensland University',
      period: 'July 2023 – June 2025',
      location: 'Sydney, Australia',
      grade: 'GPA: 5.936/7',
      description: 'Specializing in Cloud Computing, DevOps, and Software Architecture',
      courses: ['Cloud Infrastructure', 'Advanced Databases', 'Software Engineering', 'Network Security'],
      status: 'current',
      icon: <School />,
    },
    {
      degree: 'Bachelor of Information and Communication Technology',
      institution: 'Gujarat Technological University',
      period: 'July 2015 – June 2019',
      location: 'Gujarat, India',
      grade: 'CGPA: 8.91/10',
      description: 'Graduated with First Class Honors',
      courses: ['Web Development', 'Database Systems', 'Software Engineering', 'Computer Networks'],
      status: 'completed',
      icon: <WorkspacePremium />,
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
      status: 'In Progress',
      level: 70,
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      year: '2024',
      status: 'Planned',
      level: 40,
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2023',
      status: 'Completed',
      level: 100,
    },
  ];

  const achievements = [
    'Graduated with First Class Honors (Bachelor\'s)',
    'Multiple Dean\'s List recognitions',
    'Published research paper on Cloud Security',
    'Led student tech club as President',
    'Winner of University Hackathon 2018',
  ];

  return (
    <SectionWrapper
      id="education"
      title="Education & Credentials"
      subtitle="Academic journey and professional qualifications"
      sx={{
        background: 'linear-gradient(135deg, rgba(19, 47, 76, 0.8) 0%, rgba(26, 35, 126, 0.6) 100%)',
      }}
    >
      <Grid container spacing={4}>
        {/* Education Timeline */}
        <Grid size={{ xs: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Academic Journey
            </Typography>
            <Grid container spacing={4}>
              {educationData.map((edu, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={edu.degree}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderLeft: `4px solid ${
                          edu.status === 'current' 
                            ? theme.palette.primary.main 
                            : theme.palette.success.main
                        }`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Avatar
                            sx={{
                              bgcolor: edu.status === 'current' ? 'primary.main' : 'success.main',
                              width: 60,
                              height: 60,
                            }}
                          >
                            {edu.icon}
                          </Avatar>
                          <Chip
                            label={edu.status === 'current' ? 'Current' : 'Completed'}
                            color={edu.status === 'current' ? 'primary' : 'success'}
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          {edu.degree}
                        </Typography>
                        
                        <Typography variant="body1" color="primary" fontWeight={600} gutterBottom>
                          {edu.institution}
                        </Typography>
                        
                        <Stack spacing={2} sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {edu.period}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {edu.location}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Grade sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {edu.grade}
                            </Typography>
                          </Box>
                        </Stack>
                        
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {edu.description}
                        </Typography>
                        
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                          Key Courses:
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                          {edu.courses.map((course) => (
                            <Chip
                              key={course}
                              label={course}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(33, 150, 243, 0.1)',
                                color: 'primary.main',
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>

        {/* Certifications & Achievements */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Certifications
                </Typography>
                <Stack spacing={3} sx={{ mt: 2 }}>
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1" fontWeight={600}>
                            {cert.title}
                          </Typography>
                          <Chip
                            label={cert.status}
                            size="small"
                            color={
                              cert.status === 'Completed' ? 'success' : 
                              cert.status === 'In Progress' ? 'warning' : 'default'
                            }
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {cert.issuer} • {cert.year}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={cert.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: 'rgba(33, 150, 243, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              bgcolor: 
                                cert.status === 'Completed' ? 'success.main' :
                                cert.status === 'In Progress' ? 'warning.main' : 'info.main',
                            },
                          }}
                        />
                      </Box>
                      {index < certifications.length - 1 && <Divider sx={{ my: 2 }} />}
                    </motion.div>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Achievements */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Achievements & Awards
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <AutoAwesome
                          sx={{
                            color: 'primary.main',
                            fontSize: 20,
                            mt: 0.5,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {achievement}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Visa Status
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'rgba(33, 150, 243, 0.1)',
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckCircle sx={{ color: 'success.main', fontSize: 40 }} />
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Temporary Graduate Visa (485)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Full work rights in Australia until 2026
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Education;