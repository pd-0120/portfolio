import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionWrapper from '../Shared/SectionWrapper';
import { EXPERIENCES } from '../../utils/constants';

const Experience: React.FC = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="5+ years of hands-on experience in software development"
    >
      <Box sx={{ position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 20, md: '50%' },
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: 'primary.main',
            opacity: 0.3,
            transform: { xs: 'none', md: 'translateX(-1px)' },
            display: { xs: 'none', md: 'block' },
          }}
        />

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Box
              sx={{
                position: 'relative',
                mb: 8,
                '&:last-child': { mb: 0 },
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 10, md: '50%' },
                  top: 40,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  border: '4px solid',
                  borderColor: 'background.default',
                  transform: { xs: 'none', md: 'translateX(-10px)' },
                  zIndex: 1,
                }}
              />

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' }, order: { xs: 2, md: index % 2 === 0 ? 1 : 2 },}}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        bgcolor: 'rgba(33, 150, 243, 0.05)',
                        border: '1px solid rgba(33, 150, 243, 0.2)',
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {exp.title}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <WorkIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {exp.company}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                          <CalendarTodayIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.period}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {exp.description}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                          {exp.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(33, 150, 243, 0.1)',
                                color: 'primary.main',
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 2 }}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    order: 2,
                  }}
                />

                <Grid
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    order: { xs: 1, md: index % 2 === 0 ? 2 : 1 },
                  }}
                >
                  <Box sx={{ pl: { xs: 4, md: 0 } }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'primary.main',
                        mb: 2,
                      }}
                    >
                      <WorkIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Key Achievements
                    </Typography>
                    <Stack spacing={1}>
                      {exp.achievements.map((achievement, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleIcon
                            sx={{ fontSize: 20, color: 'success.main', mt: 0.25 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Experience;