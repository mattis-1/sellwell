// components/YouTubeEmbed.tsx
import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  borderRadius?: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  borderRadius = '4px',
  width = 640,
  height = 360,
}) => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div style={{ position: 'relative', borderRadius, overflow: 'hidden' }}>
      {!isPlayerActive ? (
        <div
          onClick={() => setIsPlayerActive(true)}
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            width={width}
            height={height}
            layout="responsive"
            style={{ objectFit: 'cover' }}
          />
          {/* Custom Play Button */}
          <button
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255,255,255,0.41)',
              border: 'none',
              borderRadius: '100px',
              padding: '15px',
              cursor: 'pointer',
            }}
            aria-label="Video abspielen"
          >
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path
                fill="#444444"
                d="M20.555,11.168l-15-10c-0.307-0.204-0.702-0.224-1.026-0.05C4.203,1.292,4,1.631,4,2v20
                   c0,0.369,0.203,0.708,0.528,0.882C4.676,22.961,4.838,23,5,23c0.194,0,0.388-0.057,0.555-0.168l15-10
                   C20.833,12.646,21,12.334,21,12S20.833,11.354,20.555,11.168z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <iframe
          width="100%"
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius }}
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
