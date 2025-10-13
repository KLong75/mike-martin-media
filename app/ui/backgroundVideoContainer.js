import BackgroundVideo from 'next-video/background-video';
import getStarted from '/videos/get-started.mp4';
import homePageBannerVideo from '/videos/homepage-banner-video.mp4';

export default function BackgroundVideoContainer() {
  return (
    <div className="aspect-video">
      <BackgroundVideo
        src={homePageBannerVideo}
      />
    </div>
  );
}