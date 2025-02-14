import { axiosPost } from "./axios";

export const getPost = async()=>{
  try{
    const posts = await axiosPost.get('/posts');
    const users = await axiosPost.get('/users')

    posts.data.map(post=>{
      const {name,username} = users.data.find((user)=> user.id == post.userId)
      post.user = {name:name,userName:username}
    });

    return posts.data;
  }catch(e){
    console.log(e);
  }
}

