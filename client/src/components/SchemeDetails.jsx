import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Container, 
  Chip, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const demoData = {
  id: 1,
  title: 'Registered BOC Workers in case of an Accidental Death',
  tags: ['Accident', 'Death Benefit', 'Construction Workers', 'Financial Assistance'],
  details: 'Launched on 1st January 2018, the scheme "Registered BOC Workers in Case of Accidental Death" is a Welfare Scheme by the Building and Other Construction Workers Welfare Board, Labour Department, Jammu & Kashmir. Through this scheme, financial assistance of ₹4,00,000/- is provided to the nominee or dependents of registered BOC workers in the event of an accidental death.',
  benefits: [
    'Financial assistance of ₹4,00,000/- to the nominee/dependents',
    'Quick processing of claims',
    'No age limit for beneficiaries',
    'Direct transfer to bank account',
    'Additional support for funeral expenses'
  ],
  eligibility: [
    'Worker must be registered with the Building and Other Construction Workers Welfare Board',
    'Death must be due to an accident during work',
    'Nominee/dependents must provide valid identification',
    'Death certificate must be submitted',
    'Police report/FIR must be provided for accidental death'
  ],
  applicationProcess: [
    'Step 1: Register with the Building and Other Construction Workers Welfare Board',
    'Step 2: In case of accident, inform the board within 30 days',
    'Step 3: Submit required documents to the nearest board office',
    'Step 4: Fill out the claim form with necessary details',
    'Step 5: Submit the completed form with all documents',
    'Step 6: Verification process by the board',
    'Step 7: Approval and disbursement of funds'
  ],
  documentsRequired: [
    'Death certificate',
    'Police report/FIR',
    'Registration certificate of the deceased worker',
    'Nominee/dependent identification proof',
    'Bank account details of nominee',
    'Address proof',
    'Recent photograph of nominee',
    'Medical certificate (if applicable)'
  ],
  faqs: [
    {
      question: 'What is the time limit to apply for this benefit?',
      answer: 'The claim must be filed within 1 year from the date of the accident.'
    },
    {
      question: 'Can multiple nominees receive the benefit?',
      answer: 'No, the benefit will be provided to a single nominee as specified in the registration.'
    },
    {
      question: 'Is there any processing fee for the claim?',
      answer: 'No, there is no processing fee for this scheme.'
    },
    {
      question: 'What if the worker was not registered at the time of accident?',
      answer: 'Only registered workers are eligible for this benefit. It is important to register as soon as possible.'
    }
  ],
  sources: [
    {
      title: 'Building and Other Construction Workers Welfare Board Official Website',
      url: 'https://www.bocwboard.jk.gov.in'
    },
    {
      title: 'Labour Department, Jammu & Kashmir',
      url: 'https://www.labour.jk.gov.in'
    },
    {
      title: 'Scheme Guidelines Document',
      url: 'https://www.labour.jk.gov.in/schemes/bocw-accident'
    }
  ]
};

const SchemeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const scheme = location.state?.scheme || demoData;

  // Add null checks for arrays before mapping
  const renderList = (items) => {
    if (!items || !Array.isArray(items)) return null;
    return items.map((item, index) => (
      <ListItem key={index} sx={{ py: 0.5 }}>
        <ListItemText
          primary={item}
          sx={{
            '& .MuiListItemText-primary': {
              color: 'text.secondary',
              fontSize: '1.1rem'
            }
          }}
        />
      </ListItem>
    ));
  };

  const renderFaqs = (faqs) => {
    if (!faqs || !Array.isArray(faqs)) return null;
    return faqs.map((faq, index) => (
      <Accordion
        key={index}
        sx={{
          mb: 2,
          background: 'rgba(255, 255, 255, 0.8)',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '& .MuiAccordionSummary-content': {
              color: '#ff6b35',
              fontWeight: 'bold'
            }
          }}
        >
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ));
  };

  const renderSources = (sources) => {
    if (!sources || !Array.isArray(sources)) return null;
    return sources.map((source, index) => (
      <ListItem key={index} sx={{ py: 0.5 }}>
        <Link
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#ff6b35',
            textDecoration: 'none',
            '&:hover': {
              color: '#ff8c42',
              textDecoration: 'underline'
            }
          }}
        >
          {source.title}
        </Link>
      </ListItem>
    ));
  };

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
          <Box sx={{ mb: 4 }}>
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                onClick={() => navigate(-1)}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#ff6b35',
                  mb: 3,
                  '&:hover': {
                    color: '#ff8c42',
                  }
                }}
              >
                <ArrowBackIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Back to Results</Typography>
              </Box>
            </motion.div>

            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 66, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8c42)',
                  opacity: 0.8,
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  color: '#ff6b35',
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                {scheme.title}
              </Typography>

              <Box sx={{ mb: 4 }}>
                {scheme.tags && scheme.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      mr: 1,
                      mb: 1,
                      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                      color: '#ff6b35',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 140, 66, 0.2))',
                      }
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Scheme Details
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  color: 'text.secondary'
                }}
              >
                {scheme.details}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Benefits
              </Typography>
              <List>
                {renderList(scheme.benefits)}
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Eligibility Criteria
              </Typography>
              <List>
                {renderList(scheme.eligibility)}
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Application Process
              </Typography>
              <List>
                {renderList(scheme.applicationProcess)}
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Required Documents
              </Typography>
              <List>
                {renderList(scheme.documentsRequired)}
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Frequently Asked Questions
              </Typography>
              {renderFaqs(scheme.faqs)}

              <Divider sx={{ my: 4 }} />

              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}
              >
                Sources and References
              </Typography>
              <List>
                {renderSources(scheme.sources)}
              </List>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SchemeDetails; 