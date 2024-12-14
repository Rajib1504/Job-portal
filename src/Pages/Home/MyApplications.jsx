import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, [user.email]);
  return <div>My applied jobs{job.length}</div>;
};

export default MyApplications;
