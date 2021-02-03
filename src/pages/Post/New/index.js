import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PostEditor from './Editor/index';
import PostPreview from './Preview/index';

const useStyles = makeStyles(() => ({
  root: {},
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center'
  }
}));

function  NewPost() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([{title: 'react.js'}]);
  const [markdownText, setMarkdownText] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleTagsChange = (event, values) => {
    setTags(values);
  };

  const handleChangeMarkdown = (event) => {
    setMarkdownText(event.currentTarget.value);
  };

  return (
    <>
      <Box 
        display="flex" 
        height="calc(100% - 70px)"
        // overflow="scroll"
      >
        <Box 
          width="50%" 
          height="100%" 
          padding={2} 
          borderRight="1px solid #DDD"
        >
          <PostEditor 
            image={image}
            setImage={setImage}
            title={title}
            setTitle={handleTitleChange}
            tags={tags}
            setTags={handleTagsChange}
            markdownText={markdownText}
            setMarkdownText={handleChangeMarkdown}
          />
        </Box>
        
        <Box 
          width="50%" 
          height="100%" 
          padding={2}
        >
          <PostPreview
            image={image}
            title={title}
            tags={tags}
            markdownText={markdownText}
          />
        </Box>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Toolbar>
            <Button className={classes.marginRight}>Salvar rascunho</Button>
            <Button color="secondary" variant="outlined">Publicar</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NewPost;