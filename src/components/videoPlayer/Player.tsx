"use client"
import { Suspense } from 'react'
import ReactPlayer from 'react-player/youtube'
import Loading from './Loading'


type Props = {
    url: string
    playing?:boolean
}

const Player = ({url, playing}: Props) => {
  return (
    <div className="w-[320px] h-[256px] sm:w-[500px] sm:h-[400px] flex items-center justify-center overflow-hidden rounded-lg">



    <ReactPlayer url={url.replace('www.youtube.com', 'www.youtube-nocookie.com')}
    muted={playing ? playing : false}
    playing={playing ? playing : false}
    width="100%"
    height="70.81%"
    controls={true}
    fallback={<Loading/>}
    style={{ borderRadius: '0.5rem', overflow: 'hidden' }}
    />
 
    </div>
  )
}

export default Player