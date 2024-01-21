"use client"
import ReactPlayer from 'react-player/youtube'


type Props = {
    url: string
    playing?:boolean
}

const Player = ({url, playing}: Props) => {
  return (
    <div className="bg-muted w-[300px] h-[240px]    sm:w-[500px] sm:h-[400px] flex items-center justify-center overflow-hidden">

    <ReactPlayer url={url}
    muted={playing ? playing : false}
    playing={playing ? playing : false}
    width="100%"
    height="70.81%"
    fallback={<p>loading...</p>}
    controls={true}
    
    />
    </div>
  )
}

export default Player