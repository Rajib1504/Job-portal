import React from "react";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AddJobsForm = () => {
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData); //we get all our form data in a key value pair and in object
    const { currency, min, max, ...newJob } = initialData;
    // console.log(newJob);
    newJob.salaryRange = { currency, min, max }; // salary is become in a object
    // console.log(newJob);
    newJob.responsibilities = newJob.responsibilities.split("\n");
    newJob.requirements = newJob.requirements.split("\n");
    console.log(newJob);
    fetch("http://localhost:9000/job", {
      method: "POST",
      headers: {
        "content-type": "application/Json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ("insertedId") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "We Add request in portal",
            showConfirmButton: false,
            timer: 1500,
          });
          <Navigate to={"/myjobs"}></Navigate>;
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-md mx-auto border-2 shadow-xl rounded-xl"
      >
        <h2 className="text-2xl text-center font-bold">Add Job</h2>
        {/* logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company logo</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Give Company name"
            className="input input-bordered"
            required
          />
        </div>
        {/* job details */}
        <label className="label">
          <span className="label-text">Job Details</span>
        </label>
        <div className="flex justify-between gap-2 items-center">
          <input
            type="text"
            name="location"
            placeholder="Company Location"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <select
            defaultValue={"Select Job type"}
            name="jobType"
            className="select select-bordere input-bordered w-full max-w-xs"
            required
          >
            <option disabled>Select Job type</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-side</option>
            <option>full-time</option>
            <option>Part-time</option>
          </select>
        </div>
        <select
          defaultValue={"Select Job field"}
          name="category"
          className="select select-bordere input-bordered w-full"
          required
        >
          <option disabled>Select Job field</option>
          <option>Enginneering</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>

        {/* salary details */}
        <label className="label">
          <span className="label-text">Salary Details</span>
        </label>
        <div className="flex justify-between gap-2 items-center">
          <input
            type="text"
            name="min"
            placeholder="Min-salary"
            minLength={1}
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <input
            type="number"
            name="max"
            minLength={1}
            placeholder="Max-salary"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
        </div>

        <select
          defaultValue={"Select Currency"}
          name="currency"
          className="select select-bordere input-bordered w-full"
          required
        >
          <option disabled>Select Currency</option>
          <option>INR</option>
          <option>USD</option>
          <option>EURO</option>
          <option>BDT</option>
        </select>

        {/* job time details */}
        <label className="label">
          <span className="label-text">Time-Line</span>
        </label>
        <div className="flex justify-between gap-2 items-center">
          <input
            type="text"
            name="status"
            placeholder="Job Status"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Application Deadline"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Job Description"
            className="textarea pl-2 py-2 text-sm min-h-20 textarea-bordered textarea-lg w-full max-w-sm"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibility</span>
          </label>
          <textarea
            name="responsibilities"
            placeholder="Write each responsibility in a new line"
            className="textarea pl-2 py-2 text-sm min-h-20 textarea-bordered textarea-lg w-full max-w-sm"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            name="requirements"
            placeholder="Write each requirement in a new line"
            className="textarea pl-2 py-2 text-sm min-h-20 textarea-bordered textarea-lg w-full max-w-sm"
            required
          ></textarea>
        </div>
        <label className="label">
          <span className="label-text">HR Details</span>
        </label>
        <div className="form-control">
          <input
            type="text"
            name="hr_name"
            placeholder="HR_Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR_email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobsForm;
