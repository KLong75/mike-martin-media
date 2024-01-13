// import icons
import { HiAcademicCap } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { FaKitMedical } from "react-icons/fa6";

export default function VideoCategories() {

  return (
    <section className="">
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center p-6 gap-4">
        <li>All Videos</li>
        <li>Corporate</li>
        <li>Education</li>
        <li>Medical</li>
        <li>Nonprofit</li>
      </ul>
    </section>
  )
}