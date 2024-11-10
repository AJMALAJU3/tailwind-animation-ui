import React from 'react'
import MenuBar from '../components/MenuBar'
import Wings from '../components/Wings'
import HomeTitle from '../components/HomeTitle'
import AnimeButton from '../components/AnimeButton'

function Home() {
    return (
<>

    <MenuBar />
    <Wings />
    <div className='h-screen w-full flex flex-col md:justify-center md:items-center'>
    <HomeTitle />
    <AnimeButton />
    </div>

</>

    )
}

export default Home
