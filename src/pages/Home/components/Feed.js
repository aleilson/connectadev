import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
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
    image: '/images/posts/post8.png'
  },
  { id: 2,
    author: {
      id: 1,
      name: 'Lucas Nhimi',
      username: 'lucasnhimi',
      avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: 'Comparativo entre React.js e Vue.js - Performance',
    date: 'January 21, 2021',
    description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vocês! Quem topa?',
    hashtags: '#framework, #javascript, #reactjs, #vue',
    image: '/images/posts/post9.jpeg'
  },
]

function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Feed;