import React from "react";

const AddJobsForm = () => {
  const handleSubmit = (e) => {
    const FormData = new FormData(e.target);
    console.log(FormData);
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
            name="companyLogo"
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
            name="companyName"
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
            name="companyLocation"
            placeholder="Company Location"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <select
            name="jobType"
            className="select select-bordere input-bordered w-full max-w-xs"
            required
          >
            <option disabled selected>
              Select Job type
            </option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-side</option>
            <option>full-time</option>
            <option>Part-time</option>
          </select>
        </div>
        <select
          name="jobField"
          className="select select-bordere input-bordered w-full"
          required
        >
          <option disabled selected>
            Select Job field
          </option>
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
            name="minSalary"
            placeholder="Min-salary"
            minLength={1}
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <input
            type="number"
            name="maxSalary"
            minLength={1}
            placeholder="Max-salary"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
        </div>

        <select
          name="currency"
          className="select select-bordere input-bordered w-full"
          required
        >
          <option disabled selected>
            Select Currency
          </option>
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
            name="jobStatus"
            placeholder="Job Status"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
          <input
            type="text"
            name="applicationDeadline"
            placeholder="Application Deadline"
            className="input pr-0 pl-[3px] input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            name="jobDescription"
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
            name="jobResponsibility"
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
            name="jobRequirements"
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
            name="hrName"
            placeholder="HR_Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="hrEmail"
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
