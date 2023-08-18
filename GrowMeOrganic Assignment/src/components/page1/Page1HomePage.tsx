import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate  } from 'react-router-dom'; // Import useHistory

const Page1HomePage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && phone && email) {
      const userDetails = { name, phone, email };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      
      navigate('/page2'); 
    }
  };

  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>User Details Form</h1>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          fullWidth 
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          margin="normal"
          type='number'
          fullWidth 
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
          type='email'
          fullWidth 
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Page1HomePage;
