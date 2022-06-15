import React from 'react'
import "./StoryReel.css"
import Story from './Story'
function StoryReel() {
  return (
    <div className='storyReel'>
    <Story
    image="https://i.pinimg.com/564x/c6/e5/d0/c6e5d0031aa0df9b1af4445ea7ef6cf8.jpg"
    profileSrc="https://i.pinimg.com/236x/3d/59/f8/3d59f897a359254581fcafce96f891c5.jpg"
    title="Agastya" />
    <Story
    image="https://i.pinimg.com/236x/36/bd/2f/36bd2f1223f1dd13dd13033115d6b82f.jpg"
    profileSrc="https://i.pinimg.com/236x/a8/42/df/a842df09346e918d6df4962026957178.jpg"
    title="Ankur" />
    <Story
    image="https://i.pinimg.com/236x/9e/22/1e/9e221e812c8f4ade8a9bdbbe920f8dc1.jpg"
    profileSrc="https://i.pinimg.com/236x/19/56/85/1956859fe1799e7c5dc85086b271534e.jpg"
    title="Atishe" />
    <Story
    image="https://i.pinimg.com/236x/37/b6/8d/37b68d24ae021e754e6a5e37a399f0e3.jpg"
    profileSrc="https://i.pinimg.com/236x/a2/fb/88/a2fb885e01b718dae990fbd1e0c4a951.jpg"
    title="Arun" />
    <Story
    image="https://i.pinimg.com/236x/a2/fb/88/a2fb885e01b718dae990fbd1e0c4a951.jpg"
    profileSrc="https://i.pinimg.com/236x/e7/04/43/e7044334b1182277602bed2246be20b3.jpg"
    title="Anand" />
    </div>
  )
}

export default StoryReel