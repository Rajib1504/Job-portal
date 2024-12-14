import React, { useEffect } from "react";
import { Github, Linkedin, Link, Image, Send } from "lucide-react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  //   console.log(id, user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkdin = form.linkdin.value;
    const resume = form.resume.value;
    const profileImage = form.profileImage.value;
    //     console.log(github, linkdin, resume, profileImage);
    const jobApplication = {
      job_id: id,
      Applicant_email: user.email,
      github,
      linkdin,
      resume,
      profileImage,
    };
    // console.log(jobApplication);

    fetch("http://localhost:9000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log;
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white py-6 px-6">
            <h2 className="text-2xl font-bold text-center">
              Add Your Professional Links
            </h2>
            <p className="text-center text-blue-100 mt-2">
              Share your professional profiles
            </p>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* GitHub Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Github className="w-6 h-6" />
              </div>
              <input
                type="url"
                name="github"
                placeholder="GitHub Profile URL"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* LinkedIn Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Linkedin className="w-6 h-6" />
              </div>
              <input
                type="url"
                name="linkdin"
                placeholder="LinkedIn Profile URL"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Resume Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Link className="w-6 h-6" />
              </div>
              <input
                type="url"
                name="resume"
                placeholder="Resume / CV Link"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Image Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Image className="w-6 h-6" />
              </div>
              <input
                type="url"
                name="profileImage"
                placeholder="Profile Image URL"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Submit Links</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
