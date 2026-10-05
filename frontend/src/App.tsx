import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Container, Typography, Card, CardContent, CardHeader, Grid, Box, AppBar, Toolbar } from '@mui/material'

function App() {
const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/api/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    });
}, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Blog
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src={heroImg} width="170" height="179" alt="" />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <img src={reactLogo} alt="React logo" style={{ height: 40 }} />
            <img src={viteLogo} alt="Vite logo" style={{ height: 40 }} />
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {posts && posts.map((post) => (
              <Card key={post.title} sx={{ mb: 3 }}>
                <CardHeader
                  title={post.title}
                  subheader={`By ${post.author} on ${post.publish_date}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {/* Post content would go here */}
                    Post content coming soon...
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Documentation" />
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  Your questions, answered
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Explore Vite and React
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
