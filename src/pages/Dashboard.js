import {useAuth} from "../context/AuthContext";
import JobData from "../api/JobData";
import {useEffect, useState} from "react";
import {useApi} from "../api/useApi";

const Dashboard = () => {
    const {getJobs} = useApi();

    useEffect(() => {
        const getJobsAsync = async () => {
            const jobs = await getJobs();
        }
        
        getJobsAsync().then(() => true);
    }, []);

    return (<>
            <h2>Dashboard (Protected)</h2>

            <div>Authenticated as random user</div>
        </>);
};

export default Dashboard;