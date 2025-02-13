export default function FormattedList({ heading, sub_heading, list_items }) {
  return (
    <div className="lg:m-6 mb-12 lg:mb-20">
      <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">{heading}</h6>
      <p className="font-semibold text-sm lg:text-lg mb-4">{sub_heading}</p>
      <ul className="list-disc sm:text-lg ml-6">
        {list_items.map((item, index) => {
          const [boldText, ...restText] = item.split(":");
          return (
            <li key={index} className="">
              <strong>{boldText}:</strong> {restText.join(":")}
            </li>
          );
        })}
        {/* <li className="mt-4">
                  <strong>Color Correction & Grading:</strong> We apply color
                  techniques to make sure every scene is visually striking and
                  brand-aligned.
                </li>
                <li>
                  <strong>Sound Design:</strong> Clear audio elevates your
                  video, and our sound design ensures the highest quality for
                  your viewers.
                </li>
                <li>
                  <strong>Motion Graphics Integration:</strong> Adding titles,
                  logos, and graphics to your video makes sure your brand stands
                  out.
                </li>
                <li>
                  <strong>Multi-Camera Editing:</strong> Combining multiple
                  video perspectives creates a dynamic, engaging viewing
                  experience.
                </li>
                <li>
                  <strong>Storyboarding & Sequencing:</strong> We organize
                  footage with care to build a story that flows naturally and
                  keeps your audience engaged.
                </li> */}
      </ul>
    </div>
  );
}
