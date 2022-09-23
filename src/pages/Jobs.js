import {useEffect, useState} from "react";
import {useApi} from "../api/useApi";
import JobCard from "../components/JobCard";
import Spinner from "../components/Spinner";

const Jobs = () => {
    const {getJobs} = useApi();
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const jobs = await getJobs();
                setJobs(jobs);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (<>
        {isLoading && <Spinner/>}
        {!isLoading &&
            <span>
                <h1 className="text-2xl text-center mb-4"> C# Jobs in Salzburg </h1>
                <div className="container flex flex-wrap gap-4 md:gap-8 lg:gap-12 justify-center mx-auto px-4 pb-8">
                    {jobs &&
                        jobs.map((job, index) => {
                            if(job.isArchived !== true) {
                                return <JobCard {...job} key={index}/>
                            }
                        })
                    }
                </div>
            </span>
        }
    </>)
};

export default Jobs;