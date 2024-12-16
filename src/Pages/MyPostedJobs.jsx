import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [myJobs, setMyjobs] = useState([]);
  console.log(myJobs);
  useEffect(() => {
    fetch(`http://localhost:9000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyjobs(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-4xl">My job{myJobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>view application</th>
            </tr>
          </thead>
          <tbody>
            {myJobs.map((myJob, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{myJob.company}</td>
                <td>{myJob.category}</td>
                <td>{myJob.location}</td>
                <td>
                  <Link to={`/application/${myJob._id}`}>
                    <button
                      className="
                btn btn-link"
                    >
                      View application
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
