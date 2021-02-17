import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:5000/posts/';

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
             <form>
                 <div>
                 <h2>Title</h2>
                     <input
                         type="text"
                         placeholder="Enter Title"
                         value={newTitle}
                         onChange={(event) => setNewTitle(event.target.value)}>
                    </input>
                 <h2>Description</h2>
                     <input
                         type="text"
                         placeholder="Enter description"
                         value={newDescription}
                         onChange={(event) => setNewDescription(event.target.value)}>
                         </input>
                     </div>
                 <button type="submit" onClick={createPost}>Add Post</button>
             </form>
         {posts.map((post) => {
             const {_id,title,description} = post
             return (
                 <div key={_id}>
                     <h1>{title}</h1>
                     <p>{description}</p>
                     <button type="submit" onClick={() => updatePost(_id)}>Update Post</button>
                     <button type="submit" onClick={() => deletePost(_id)}>Delete</button>
                </div>
            )
        })}
     </>
     )
        
}
