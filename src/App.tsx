import { Button, Typography } from '@mui/material';
import { Home, Favorite } from '@mui/icons-material';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Material-UI with Icons
      </Typography>

      {/* Button with Icon */}
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<Home />}
      >
        Home
      </Button>

      <Button 
        variant="outlined" 
        color="secondary" 
        endIcon={<Favorite />}
        style={{ marginLeft: '10px' }}
      >
        Like
      </Button>
    </div>
  );
}

export default App;
