import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import features from '../lib/data/Features';

const Why = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "50px" }}>
      <div style={{ }}>
        <Typography variant='h4' sx={{ color: '#66fcf1', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: "500px" }}>Why Choose Us?</Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: "10px", alignItems: "center", display: "flex", justifyContent: "center", paddingLeft: { xs: '18px', sm: '18px', md: '18px', lg: '145px' }, paddingRight: { xs: '15px', sm: '18px', md: '18px', lg: '140px' } }}>
          {features.map((feature, index) => (
            <Grid item xs={4} sm={6} md={4} key={index}>
              <Card sx={{ bgcolor: "transparent", border: "1px solid #66fcf1", borderRadius:"10px" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <img src={feature.icon} alt={feature.name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <Typography variant="body1" sx={{ color: "#66fcf1", fontFamily: "Montserrat", fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }}>{feature.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Why;
