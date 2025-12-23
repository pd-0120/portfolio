import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Stack,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code,
  GitHub,
  LinkedIn,
  Email,
  LocationOn,
  Phone,
  ArrowUpward,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = {
    Quick: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
    ],
    Technologies: [
      { label: 'React & Next.js', href: '#' },
      { label: 'Laravel & PHP', href: '#' },
      { label: 'AWS & Cloud', href: '#' },
      { label: 'DevOps Tools', href: '#' },
      { label: 'Databases', href: '#' },
    ],
    Contact: [
      { label: 'pareshparmar232@gmail.com', href: 'mailto:pareshparmar232@gmail.com' },
      { label: '+61 434 532 746', href: 'tel:+61434532746' },
      { label: 'Sydney, Australia', href: 'https://maps.google.com/?q=Sydney+Australia' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(10, 25, 41, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(33, 150, 243, 0.05) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
  {/* Brand Column */}
  <Grid size={{ xs: 12, md: 4 }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Code sx={{ fontSize: 40, color: 'primary.main' }} />
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background:
                  'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pareshkumar Parmar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full-Stack Developer & DevOps Engineer
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Building scalable web applications with modern technologies and
          cloud infrastructure. Passionate about creating efficient,
          maintainable, and user-friendly solutions.
        </Typography>

        <Stack direction="row" spacing={2}>
          {[{
            icon: <GitHub />,
            href: 'https://github.com/pd-0120',
            hover: 'primary.main',
          }, {
            icon: <LinkedIn />,
            href: 'https://www.linkedin.com/in/pareshkumar-parmar-2b3645118/',
            hover: '#0077B5',
          }, {
            icon: <Email />,
            href: 'mailto:pareshparmar232@gmail.com',
            hover: 'success.main',
          }].map(({ icon, href, hover }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                href={href}
                target="_blank"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: hover,
                    color: 'white',
                  },
                }}
              >
                {icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </motion.div>
  </Grid>

  {/* Links Columns */}
  <Grid size={{ xs: 12, md: 8 }}>
    <Grid container spacing={4}>
      {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
        <Grid size={{ xs: 12, sm: 4 }} key={category}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ color: 'white' }}
            >
              {category}
            </Typography>

            <Stack spacing={1.5}>
              {links.map((link, linkIndex) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: linkIndex * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    underline="none"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {category === 'Contact' && linkIndex === 0 && (
                      <Email sx={{ fontSize: 16 }} />
                    )}
                    {category === 'Contact' && linkIndex === 1 && (
                      <Phone sx={{ fontSize: 16 }} />
                    )}
                    {category === 'Contact' && linkIndex === 2 && (
                      <LocationOn sx={{ fontSize: 16 }} />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Grid>
</Grid>


        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body2" color="text.secondary" align="center">
              &copy; {currentYear} Pareshkumar Parmar. All rights reserved.
            </Typography>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'primary.main',
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <Typography variant="body2" fontWeight={500}>
                Back to top
              </Typography>
              <ArrowUpward sx={{ fontSize: 20 }} />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;