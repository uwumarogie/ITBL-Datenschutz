import React, { useRef } from 'react';

interface Timestamp {
  label: string;
  time: number;
}

interface VideoPlayerProps {
  src: string
  timestamps: Timestamp[]
  className?: string
  height: number
  width: number
}

export function VideoPlayer({ src, timestamps, className}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimestampClick = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
      videoRef.current.play();
    }
  };

  return (
    <div className={className}>
      <video ref={videoRef} width={} height="360" controls className='rounded-xl'>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        {timestamps.map((timestamp, index) => (
          <button key={index} onClick={() => handleTimestampClick(timestamp.time)}>
            {timestamp.label}
          </button>
        ))}
      </div>
    </div>
  );
};
