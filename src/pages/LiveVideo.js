import React from "react";

// Sample data for live videos
const liveVideos = [
  {
    id: 1,
    title: "Live Event 1",
    description: "Join us for an exciting live event!",
    videoUrl: "https://www.youtube.com/embed/8KZK1YmurCs?autoplay=1&mute=1",
    detailsPage: "/live-event-1",
  },
  {
    id: 2,
    title: "Live Event 2",
    description: "Don't miss this exclusive live stream!",
    videoUrl: "https://www.youtube.com/embed/CWxyIz3F09E?autoplay=1&mute=1",
    detailsPage: "/live-event-2",
  },
  {
    id: 3,
    title: "Live Event 3",
    description: "Tune in for a groundbreaking live session!",
    videoUrl: "https://www.youtube.com/embed/5hPtU8Jbpg0?autoplay=1&mute=1",
    detailsPage: "/live-event-3",
  },
  {
    id: 4,
    title: "Live Event 4",
    description: "Experience the future of live streaming!",
    videoUrl: "https://www.youtube.com/embed/aTC_RNYtEb0?autoplay=1&mute=1",
    detailsPage: "/live-event-4",
  },
];

const LiveVideoPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Live Video Streams
      </h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveVideos.map((video) => (
          <div
            key={video.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => window.open(video.detailsPage, "_blank")}
          >
            {/* Video Player */}
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Click to View Details</p>
            </div>

            {/* Video Title and Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="text-xl font-bold">{video.title}</h3>
              <p className="text-sm text-gray-300">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveVideoPage;