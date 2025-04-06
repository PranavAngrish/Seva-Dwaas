import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const dummyData = {
  userInfo: {
    name: 'Rahul Sharma',
    aadharNumber: 'XXXX-XXXX-XXXX-1234',
    healthId: 'ABHA-1234-5678-9012'
  },
  stats: {
    totalSchemes: 5,
    availedSchemes: 3,
    pendingSchemes: 2,
    completionRate: 60
  },
  availedSchemes: [
    {
      id: 1,
      name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)',
      status: 'Availed',
      date: '2023-05-15',
      benefits: '₹5 lakhs health insurance coverage per family per year',
      hospital: 'Apollo Hospitals, Delhi'
    },
    {
      id: 2,
      name: 'Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)',
      status: 'Availed',
      date: '2023-08-22',
      benefits: 'Free antenatal care services',
      hospital: 'AIIMS, Delhi'
    },
    {
      id: 3,
      name: 'National Health Mission (NHM)',
      status: 'Availed',
      date: '2023-11-10',
      benefits: 'Free essential medicines and diagnostics',
      hospital: 'Safdarjung Hospital, Delhi'
    }
  ],
  pendingSchemes: [
    {
      id: 4,
      name: 'Rashtriya Swasthya Bima Yojana (RSBY)',
      status: 'Pending',
      date: '2024-01-15',
      benefits: 'Health insurance coverage of ₹30,000 per family',
      progress: 60
    },
    {
      id: 5,
      name: 'Janani Suraksha Yojana (JSY)',
      status: 'Pending',
      date: '2024-02-01',
      benefits: 'Cash assistance for institutional delivery',
      progress: 30
    }
  ]
};

const UserDashboard = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
      py: 8
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* User Info Section */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 66, 0.1)',
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ color: '#ff6b35', fontWeight: 'bold', mb: 1 }}>
                  Welcome, {dummyData.userInfo.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Aadhar: {dummyData.userInfo.aadharNumber}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  ABHA ID: {dummyData.userInfo.healthId}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Chip
                    icon={<CheckCircleIcon />}
                    label={`${dummyData.stats.availedSchemes} Availed`}
                    color="success"
                    sx={{ fontSize: '1rem', p: 2 }}
                  />
                  <Chip
                    icon={<PendingIcon />}
                    label={`${dummyData.stats.pendingSchemes} Pending`}
                    color="warning"
                    sx={{ fontSize: '1rem', p: 2 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Stats Section */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 140, 66, 0.1)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocalHospitalIcon sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
                    <Typography variant="h4" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                      {dummyData.stats.totalSchemes}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    Total Schemes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 140, 66, 0.1)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <HealthAndSafetyIcon sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
                    <Typography variant="h4" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                      {dummyData.stats.availedSchemes}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    Availed Schemes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 140, 66, 0.1)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MedicalServicesIcon sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
                    <Typography variant="h4" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                      {dummyData.stats.pendingSchemes}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    Pending Schemes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Availed Schemes Section */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 66, 0.1)',
            }}
          >
            <Typography variant="h5" sx={{ color: '#ff6b35', fontWeight: 'bold', mb: 3 }}>
              Availed Healthcare Schemes
            </Typography>
            <List>
              {dummyData.availedSchemes.map((scheme, index) => (
                <React.Fragment key={scheme.id}>
                  <ListItem
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    sx={{
                      py: 2,
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                          {scheme.name}
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                            {scheme.benefits}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Hospital: {scheme.hospital}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Availed on: {scheme.date}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < dummyData.availedSchemes.length - 1 && (
                    <Divider sx={{ my: 2, background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))' }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>

          {/* Pending Schemes Section */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 66, 0.1)',
            }}
          >
            <Typography variant="h5" sx={{ color: '#ff6b35', fontWeight: 'bold', mb: 3 }}>
              Pending Healthcare Schemes
            </Typography>
            <List>
              {dummyData.pendingSchemes.map((scheme, index) => (
                <React.Fragment key={scheme.id}>
                  <ListItem
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    sx={{
                      py: 2,
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <ListItemIcon>
                      <PendingIcon sx={{ color: '#ff9800', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                          {scheme.name}
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                            {scheme.benefits}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                            Expected Completion: {scheme.date}
                          </Typography>
                          <Box sx={{ width: '100%', mt: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={scheme.progress}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255, 140, 66, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  background: 'linear-gradient(90deg, #ff6b35, #ff8c42)',
                                },
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, textAlign: 'right' }}>
                              {scheme.progress}% Complete
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < dummyData.pendingSchemes.length - 1 && (
                    <Divider sx={{ my: 2, background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))' }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default UserDashboard; 