import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const url = 'http://localhost:5000/posts/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 export default function Posts() {
     const [posts, setPosts] = useState([]);
     const [newTitle, setNewTitle] = useState("");
     const [newDescription, setNewDescription] = useState("");

     useEffect(() => {
         getUsers()
     }, [posts])

     const getUsers = async () => {
         try {
             let response = await axios.get(url);
             const data = response.data.data.posts;
             setPosts(data);
         }catch (error) {
             console.log(error);
         }
     }

     const createPost = (event) => {
         event.preventDefault();
         try {
             if (newTitle !== '' && newDescription !== '') {
                 axios.post(url, {
                 title: newTitle,
                 description: newDescription
                 });
                 alert("Item Added successfully!")
             } else {
                return alert("Item is not Added because one of the fields are missing");
             }
         } catch (error) {
             console.log(error)
         }
     }
     const updatePost = (id) => {
         try {
             if (newTitle !== "" && newDescription !== "") {
                 axios.patch(url + id, {
                     title: newTitle,
                     description: newDescription
                 });
                 alert("Item Updated successfully!")
             } else {
                return alert("Item is not Updated because one of the fields are missing");
             }
             
         } catch (error) {
             
         }
     }
     
     const deletePost = async (id) => {
         try {
             let request = await axios.delete(url + id);
             console.log(request);
         }catch (error) {
             console.log(error);
         }
     }


     return (
         <>
             <CssBaseline />
             <Container maxWidth="sm">
             <form>
                 <div>
                 <h2>Title</h2>
                     <TextField
                         type="text"
                         placeholder="Enter Title"
                         value={newTitle}
                         onChange={(event) => setNewTitle(event.target.value)}>
                    </TextField>
                 <h2>Description</h2>
                     <TextField
                         type="text"
                         placeholder="Enter description"
                         value={newDescription}
                         onChange={(event) => setNewDescription(event.target.value)}>
                         </TextField>
                     </div>
                 <Button
                     color="primary"
                     variant="contained"
                     type="submit"
                     onClick={createPost}>Add Post</Button>
                 </form>
                 
         {posts.map((post) => {
             const {_id,title,description} = post
             return (
                 <div key={_id}>
                     <h1>{title}</h1>
                     <p>{description}</p>
                     <Button color="primary"
                         variant="contained"
                         type="submit" onClick={() => updatePost(_id)}
                     >Update Post
                     </Button>
                     <Button
                         variant="contained"
                         color="primary"
                         type="submit" onClick={() => deletePost(_id)}
                     >Delete
                     </Button>
                </div>
            )
         })}
        </Container>     
     </>
     )
        
}
