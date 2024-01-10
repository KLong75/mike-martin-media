import VideoFrame
 from "../ui/videoFrame";
export const metadata = {
  title: 'Page 3',
}

export default function Page() {
  return (
    <main className='bg-slate-50 flex-1'>
      <h2 className="text-center">Page 3</h2>
      <div>
      <VideoFrame 
        src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&muted=1&byline=0&portrait=0"
        // title="MMM Homepage Vid 2024 Version 2 010524"
      />
      </div>
    </main>
  );
}