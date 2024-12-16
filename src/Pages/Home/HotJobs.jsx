import React, { useEffect, useState } from "react";
import HotJobsCart from "./HotJobsCart";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 lg:grid-cols-3 lg:w-11/12 mx-auto my-4">
        {jobs.map((jb) => (
          <HotJobsCart key={"jb._id"} jb={jb}></HotJobsCart>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
