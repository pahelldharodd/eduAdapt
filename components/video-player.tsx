import React from "react"

interface VideoPlayerProps {
  src: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="video-player">
      <video controls className="w-full h-auto">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}