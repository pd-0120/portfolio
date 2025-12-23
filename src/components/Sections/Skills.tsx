import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../Shared/SectionWrapper';
import { SKILLS } from '../../utils/constants';

const SkillBar: React.FC<{
  skill: { name: string; level: number; color?: string };
}> = ({ skill }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1" fontWeight={500}>
          {skill.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skill.level}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: skill.color || theme.palette.primary.main,
            boxShadow: `0 0 20px ${skill.color || theme.palette.primary.main}40`,
          },
        }}
      />
    </Box>
  );
};

const Skills: React.FC = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: SKILLS.frontend,
      color: theme.palette.primary.main,
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: SKILLS.backend,
      color: theme.palette.secondary.main,
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: SKILLS.devops,
      color: theme.palette.info.main,
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: SKILLS.databases,
      color: theme.palette.success.main,
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Expertise across modern web development stack"
      sx={{
        background: 'linear-gradient(135deg, rgba(10, 25, 41, 0.8) 0%, rgba(19, 47, 76, 0.6) 100%)',
      }}
    >
      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={category.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${category.color}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ mr: 2 }}
                    >
                      {category.icon}
                    </Typography>
                    <Typography variant="h5" fontWeight={600}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    {category.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        skill={{ ...skill, color: skill.color || category.color }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Tech Stack Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 4 }}>
            Technology Stack
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            {[
              'React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js',
              'Express', 'Vue.js', 'AWS', 'Docker', 'Kubernetes',
              'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'GraphQL',
              'Material-UI', 'Tailwind', 'Git', 'CI/CD', 'Agile',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Chip
                  label={tech}
                  sx={{
                    px: 2,
                    py: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    bgcolor: 'rgba(33, 150, 243, 0.1)',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
        </Box>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;