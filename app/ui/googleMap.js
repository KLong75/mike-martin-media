export default function GoogleMap() {
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex justify-center">
        <div
          className="w-full banner-video-aspect-ratio-container"
          style={{
            paddingTop: "56.25%",
          }}>
          <iframe
            title="Mike Martin Media on Google Maps"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3116.461730452015!2d-90.2273243!3d38.6382623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8c6735ac822fb%3A0x32eff35f341c030b!2sMike%20Martin%20Media%2C%20LLC!5e0!3m2!1sen!2sus!4v1707324283523!5m2!1sen!2sus"
            // width="800"
            // height="400"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
