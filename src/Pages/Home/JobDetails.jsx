import {
  ArrowLeft,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  MapPin,
} from "lucide-react";
import React from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
const JobDetails = () => {
  // const location = useLocation();
  // const handleBack = () => {
  //   console.log("loction in the details page", location);
  //   return location.state;
  // };

  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-blue-600 text-white p-6">
            <button
              // onClick={handleBack}
              className="absolute top-4 left-4 hover:bg-blue-700 p-2 rounded-full transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4">
              <img
                src={job.company_logo}
                alt={`${job.company} logo`}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold">{job.title}</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <Briefcase className="w-5 h-5" />
                  <span>{job.company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid md:grid-cols-3 gap-4 p-6 bg-gray-50">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Job Type</p>
                <p className="text-gray-600">{job.jobType}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="text-purple-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Salary</p>
                <p className="text-gray-600">
                  {job.salaryRange.min} - {job.salaryRange.max}{" "}
                  {job.salaryRange.currency.toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-red-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Application Deadline</p>
                <p className="text-gray-600">{job.applicationDeadline}</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>

            {/* Requirements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HR Contact */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-6 h-6 text-gray-600" />
                <span className="font-semibold">HR Contact</span>
              </div>
              <p>{job.hr_name}</p>
              <p>{job.hr_email}</p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="p-6 bg-gray-50 flex justify-center">
            <Link to={`/applyform/${job._id}`}>
              <button
                //   onClick={handleApply}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Apply Now
              </button>
            </Link>

            {/* <div className="text-green-600 flex items-center space-x-2">
              <CheckCircle className="w-8 h-8" />
              <span className="text-xl font-semibold">
                Application Submitted Successfully!
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
