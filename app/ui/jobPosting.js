

const JobPosting = () => {
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="font-semibold text-center text-2xl md:text-3xl lg:text-4xl mt-4">
        We are hiring!
      </h2>
      <p className="font-bold text-center p-2 mb-6 lg:text-xl 2xl:text-2xl">
        We are hiring an experienced videographer/editor.
        <br />
        <a
          href="https://www.ziprecruiter.com/job/508a37ad"
          className="underline"
          rel="noreferrer noopener"
          target="_blank">
          Apply on ZipRecruiter
        </a>
      </p>
      <div className="font-bold py-4 px-8 md:px-24 lg:px-52 lg:px-72 2xl:px-96">
        <h3 className="text-lg">Videographer/Editor</h3>
        <ul className="list-disc px-8">
          <li>Full-time</li>
          <li>Dental, Medical, Paid Time Off</li>
        </ul>
      </div>
      <div className="font-bold">
        <p className="px-8 py-4 md:px-24 lg:px-52 lg:px-72 2xl:px-96">
          Amazing opportunity with a St. Louis-based video production company
          seeking an experienced videographer/editor. Position requires some
          travel. Our ideal candidate has experience shooting in various
          environments, is creative and works well with a team. Post-production
          proficiency in Premier Pro is required, and After Effects experience
          is a bonus. Experience working in a professional production
          environment is a plus.
        </p>

        <p className="px-8 py-4 md:px-24 lg:px-52 lg:px-72 2xl:px-96">
          MMM has been in business since 2009, and we service local, national
          and international clients that range from nonprofits to Fortune 500
          corporations. We are searching for a passionate videographer that can
          bring their shooting skills and techniques into our organization. A
          positive attitude is a must! Our team is small but mighty, and our
          business is like a family.
        </p>

        <p className="px-8 py-4 md:px-24 lg:px-52 lg:px-72 2xl:px-96">
          Compensation is negotiable based on experience. MMM offers health
          insurance, paid holidays, sick days and vacation pay. Our employees
          also receive quarterly bonuses based on company performance. This is a
          full-time and in-person position. Our studio is located in Grand
          Center in the heart of St. Louis city.
        </p>

        <p className="px-8 py-4 md:px-24 lg:px-52 lg:px-72 2xl:px-96">
          To apply, please send a resume and your video reel. We would also
          appreciate a cover letter explaining why you think this job might be a
          good fit for your career. We look forward to hearing from you and
          meeting you!
        </p>
      </div>
    </div>
  );
};

export default JobPosting;
