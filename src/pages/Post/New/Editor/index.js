import React, {useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone';


const useStyles = makeStyles((theme) => ({
  image: {
    height: '100px'
  },
  textArea: {
    width: "100%",
    height: "100%",
    resize: "none",
    border: "none",
    outline: "none",
    fontSize: 15,
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

const arrayTags = [
  { title: 'react.js' },
  { title: 'vue.js' },
  { title: 'node.js' },
  { title: 'dotnetcore' },
  { title: 'js' },
  { title: 'javascript' },
];

function PostEditor({
  image, 
  setImage, 
  title, 
  setTitle, 
  tags, 
  setTags, 
  markdownText, 
  setMarkdownText,
}) {
  const classes = useStyles();

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64date = reader.result;
      setImage(base64date);
    };
  }, [setImage]);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*"
  });

  return (
    <>
      <Box {...getRootProps()} mb={2}>
        <input {...getInputProps()} />
        <Button>Carregar imagem</Button>
      </Box>

      {image && (
        <Box mb={2}>
          <img className={classes.image} src={image} alt="background" />
        </Box>
      )}

      <Box mb={2}>
        <TextField 
          id="title" 
          placeholder="Título" 
          fullWidth value={title} 
          onChange={setTitle} 
        />
      </Box>

      <Box mb={2}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={arrayTags}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={setTags}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="Tags"
            />
          )}
        />
      </Box>

      <textarea onChange={setMarkdownText} value={markdownText} className={classes.textArea}></textarea>
    </>
  )
}

export default PostEditor;