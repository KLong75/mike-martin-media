// import from next
import Image from "next/image";

export default function WereHiring(){
  return (
    <div className="were-hiring">
      <div className="company-logo">
        <Image src="https://www.ziprecruiter.com/assets/static/img/badge-hiring-2-300px.png" alt="Company logo" width={300} height={240} />
      </div>
      <h2 className="hiring-title">We're Hiring!</h2>
      <p className="hiring-description">Join our team and help us build the future.</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
}