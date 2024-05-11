import React from 'react';
import { Typography, Select, MenuItem, TextField, Button, Grid } from '@mui/material';
import './Book.css';

const Book = () => {
  return (
    <div>
      <div className='road' style={{ textAlign: "center", paddingTop: "30px" }}>
        <Typography variant='h4' style={{ color: "white", fontFamily: "Montserrat", fontWeight: "500" }}>Explore The Roads of Odisha</Typography>
      </div>
        
      <div className="form-container">
        <form className="form" style={{ backgroundColor: "#45a29a", marginTop: "-200px", padding: "20px" }}>
          <Typography variant='body1' style={{ color: "black", fontFamily: "Montserrat", fontWeight: "500", marginBottom: "20px", textAlign:"center" }}>Odisha's Best Rental Cars</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                select
                label="Select City"
                fullWidth
                variant="standard"
                size="small"
              >
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="pickup-date"
                label="Pickup Date"
                type="date"
                fullWidth
                variant="standard"
                size="small"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black', fontWeight: 'bold' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="pickup-time"
                label="Pickup Time"
                type="time"
                fullWidth
                variant="standard"
                size="small"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black', fontWeight: 'bold' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dropoff-date"
                label="Dropoff Date"
                type="date"
                fullWidth
                variant="standard"
                size="small"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black', fontWeight: 'bold' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dropoff-time"
                label="Dropoff Time"
                type="time"
                fullWidth
                variant="standard"
                size="small"
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'black', fontWeight: 'bold' }
                }}
              />
            </Grid>
          </Grid>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
