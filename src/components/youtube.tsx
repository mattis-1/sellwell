// components/YouTubeGrid.tsx
import React from 'react';

interface YouTubeGridProps {
  videoIds: string[];
  borderRadius?: string;
  gap?: string; // For gap customization
}

const YouTubeGrid: React.FC<YouTubeGridProps> = ({
  videoIds,
  borderRadius = '0px',
  gap = '1rem', // Default gap
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
      style={{
        // Gap is now handled via Tailwind classes instead of inline style
      }}
    >
      {videoIds.map((id, index) => (
        <div
          key={index}
          className="mb-8 sm:mb-6 md:mb-0" // Add bottom margin only on mobile/small screens
          style={{
            width: '100%',
            position: 'relative',
            paddingBottom: '56.25%', // maintains a 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            // Only the marginBottom for last items is kept in the style
            marginBottom: index === videoIds.length - 1 || index === videoIds.length - 2 ? '0' : '',
          }}
        >
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[16px] md:rounded-[22px] overflow-hidden">
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
              }}
              title={`YouTube video ${index + 1}`}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeGrid;