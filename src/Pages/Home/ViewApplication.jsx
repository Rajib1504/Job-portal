import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const application = useLoaderData();
  const handelStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:9000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if ("data.modifiedCount") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  console.log(application);
  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job{application?.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>email</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {application.map((a, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{a.Applicant_email}</td>
                <td>quality control specilist</td>
                <td>
                  <select
                    onChange={(e) => handelStatusUpdate(e, a._id)}
                    defaultValue={application.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>change status</option>
                    <option>Under review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
