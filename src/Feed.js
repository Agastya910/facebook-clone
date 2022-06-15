import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import './Feed.css'
function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://i.pinimg.com/236x/2f/b0/9f/2fb09f6bfaf5d4edeb41b60b30f6c3e7.jpg"
      message= "wow"
      timestamp="this is a timestamp"
      username="agastyayo"
      image="https://i.pinimg.com/564x/d7/d1/8d/d7d18d1fc7b4137ee9b2160398b9f871.jpg"/>
      <Post profilePic="https://i.pinimg.com/736x/9c/b9/f8/9cb9f8d010a5249709260abccd735c01.jpg"
      message= "wow"
      timestamp="this is a timestamp"
      username="anket"
      image="https://i.pinimg.com/564x/27/25/0b/27250b95b19225ac4b2822823cf20e7e.jpg" />
      <Post 
       profilePic="https://i.pinimg.com/236x/46/a2/3c/46a23c726c7772818d55928b0476e8c3.jpg"
       message= "wow"
       timestamp="this is a timestamp"
       username="amit"
       image="https://i.pinimg.com/564x/f4/a5/72/f4a572c4286ff5cda723e4246c96d568.jpg" />
      </div>
  
  )
}

export default Feed