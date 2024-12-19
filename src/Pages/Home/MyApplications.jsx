import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [job, setJob] = useState([]);
  console.log(job);
  useEffect(() => {
    // fetch(`http://localhost:9000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJob(data);
    // });
    axios
      .get(`http://localhost:9000/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => console.log(setJob(res.data)));
  }, [user.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Job Status</th>
              <th></th>
            </tr>
          </thead>
          {job.map((j) => (
            <tbody key={j._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={j.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{j.company}</div>
                      <div className="text-sm opacity-50">{j.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {j.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">{j.title}</span>
                </td>
                <td>{j.status}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">X</button>
                </th>
              </tr>
            </tbody>
          ))}
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
