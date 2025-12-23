import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography } from '@mui/material';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  sx?: object;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
  sx = {},
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        </motion.div>
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;