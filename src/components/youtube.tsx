// components/YouTubeGrid.tsx
import React from 'react';

interface YouTubeGridProps {
  videoIds: string[];
  borderRadius?: string;
  gap?: string; // New prop for gap customization
}

const YouTubeGrid: React.FC<YouTubeGridProps> = ({
  videoIds,
  borderRadius = '0px',
  gap = '1rem', // Default gap
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        gap: gap,
      }}
    >
      {videoIds.map((id, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            position: 'relative',
            paddingBottom: '56.25%', // maintains a 16:9 aspect ratio
            height: 0,
            borderRadius: borderRadius,
            overflow: 'hidden',
            marginBottom: index === videoIds.length - 1 || index === videoIds.length - 2 ? '0' : '',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${id}?modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: borderRadius,
            }}
            title={`YouTube video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTubeGrid;