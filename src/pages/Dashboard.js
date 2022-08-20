import {useEffect} from "react";
import {useApi} from "../api/useApi";

const Dashboard = () => {
    const {getJobs} = useApi();

    useEffect(() => {
        const getJobsAsync = async () => {
            const jobs = await getJobs();
            console.log(jobs);
        }
        
        getJobsAsync().then(() => true);
    }, []);

    return (<>
            <h2>Dashboard (Protected)</h2>

            <div>Authenticated as random user</div>
        </>);
};

export default Dashboard;