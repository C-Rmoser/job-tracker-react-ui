import {useEffect, useState} from "react";
import {useApi} from "../api/useApi";
import JobCard from "../components/JobCard";

const Dashboard = () => {
    const {getJobs} = useApi();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const jobs = await getJobs();
                setJobs(jobs);
            } catch (e) {
                console.log("Error catched!");
                console.log(e);
            }
        })();
    }, []);

    // TODO: Remove this and the button on this site
    const handleGetJobs = async (e) => {
        e.preventDefault();

        const jobs = await getJobs();

        console.log(jobs);
    }

    return (
        <div className="container mx-auto px-4 bg-blue-200">
            <h2>Dashboard (Protected)</h2>

            <button className="bg-amber-300 rounded p-4" onClick={handleGetJobs}> Load Jobs</button>

            {jobs &&
                <ul>
                    {jobs.map((job, index) => {
                        return <JobCard {...job} key={index} />
                    })}
                </ul>
            }
        </div>
    );
};

export default Dashboard;