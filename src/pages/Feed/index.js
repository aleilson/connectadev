import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../components/PostCard';
import Navbar from './NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  root: {

  }
}));

const posts = [
  { id: 1,
    author: {
      id: 1,
      name: 'Ale Gomes',
      username: 'alegomes',
      avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: 'Criando um App do zero utilizando React.js',
    date: 'January 28, 2021',
    description: 'Fala pessoal! Qual o framework favorito de vocês ?',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post1.png'
  },
  { id: 2,
    author: {
      id: 1,
      name: 'Ale Gomes',
      username: 'alegomes',
      avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: 'React Hooks como utilizar na prática',
    date: 'January 21, 2021',
    description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vocês! Quem topa?',
    hashtags: '#framework, #javascript, #reactjs, #vue',
    image: '/images/posts/post2.png'
  },
]

function Feed() {
  const classes = useStyles();
  return (

    <Container maxWidth="lg">
      <Box display="flex">
        <Navbar />
        <div className={classes.root}>
        {
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        }
        </div>
      </Box>
    </Container>
  );
}

export default Feed;