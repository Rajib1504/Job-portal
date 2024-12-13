import { title } from "motion/react-client";
import React from "react";
import { FaMapMarkerAlt, FaRegClock, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCart = ({ job }) => {
  console.log(job);
  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    jobType,
    location,
    salaryRange,
    responsibilities,
    status,
    requirements,
    title,
  } = job;

  return (
    <div>
      <div className="max-w-sm flex-col flex h-full w-full justify-between  border rounded-lg shadow-lg p-6 bg-white">
        {/* Company Logo and Name */}
        <div className="flex  items-center mb-4">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h3 className="text-lg font-bold">{company}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="mr-1" />
              {location}
            </div>
          </div>
          <FaBolt className="text-green-500 ml-auto" />
        </div>

        {/* Job Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {/* Job Type and Time */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center mr-4">
            <FaRegClock className="mr-1" />
            {jobType}
          </span>
          <span>5 minutes ago</span>
        </div>

        {/* Job Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-start items-center mb-4">
          {requirements.map((reqirement) => (
            <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
              {reqirement}
            </span>
          ))}
        </div>

        {/* Pay and Apply Button */}
        <div className="flex items-center justify-between">
          <h4 className="text-blue-600 font-bold">
            {" "}
            {salaryRange.min}-{salaryRange.max}{" "}
            <span className="text-red-300 text-sm">
              {" "}
              {salaryRange.currency}
            </span>
          </h4>
          <Link
            to={`/job/${_id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCart;
