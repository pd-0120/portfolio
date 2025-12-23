import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import SectionWrapper from '../Shared/SectionWrapper';
import { PROJECTS } from '../../utils/constants';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const handleOpenDialog = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Real-world applications showcasing technical expertise"
    >
      <Grid container spacing={4}>
        {PROJECTS.map((project, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0 20px 40px rgba(33, 150, 243, 0.2)',
                    '& .project-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
                onClick={() => handleOpenDialog(project)}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 41, 0.8) 100%)',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
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
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(156, 39, 176, 0.1)',
                          color: 'secondary.main',
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': { bgcolor: 'primary.main' },
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.live, '_blank');
                      }}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': { bgcolor: 'primary.main' },
                      }}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Project Details Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onClose={handleCloseDialog}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                background: 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
                borderRadius: 3,
                border: '1px solid rgba(33, 150, 243, 0.2)',
              },
            }}
          >
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog} size="small">
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{ borderRadius: 2, mb: 3 }}
                />
                <Typography variant="body1" color="text.secondary" paragraph>
                  {selectedProject.description}
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Technologies Used
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                {selectedProject.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      bgcolor: 'rgba(33, 150, 243, 0.1)',
                      color: 'primary.main',
                    }}
                  />
                ))}
              </Stack>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Key Features
              </Typography>
              <Stack spacing={1}>
                {selectedProject.features.map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        mt: 1,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Button
                startIcon={<GitHubIcon />}
                onClick={() => window.open(selectedProject.github, '_blank')}
                variant="outlined"
              >
                View Code
              </Button>
              <Button
                startIcon={<OpenInNewIcon />}
                onClick={() => window.open(selectedProject.live, '_blank')}
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                }}
              >
                Live Demo
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;