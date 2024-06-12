import Image from 'next/image';

const JobPosting = ({ job }) => {
  return (
    <div className="job-posting">
      <div className="company-logo">
        <Image src={job.companyLogo} alt={`${job.companyName} logo`} width={50} height={50} />
      </div>
      <h2 className="position-title">{job.positionTitle}</h2>
      <p className="company-name">{job.companyName}</p>
      <p className="company-address">{job.companyAddress}</p>
      <p className="job-type">{job.isFullTime ? 'Full Time' : 'Part Time'}</p>
      <p className="job-description">{job.jobDescription}</p>
    </div>
  );
};

export default JobPosting;