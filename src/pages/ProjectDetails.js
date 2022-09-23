import {Link} from "react-router-dom";

const ProjectDetails = () => {
    return (<>
            <div className="text-lg">
                <h1 className="mb-2">Project Details</h1>
                <br/>

                <h2 className="mb-2">Overview</h2>
                <ul className="list-disc">
                    <li>
                        The job data is gathered in fixed intervals from <a className="text-sky-600 hover:underline"
                                                                            href="https://www.karriere.at"
                                                                            target="_blank">karriere.at</a> and <a
                        className="text-sky-600 hover:underline" href="https://www.devjobs.at"
                        target="_blank">devjobs.at</a> by
                        a tool called <a className="text-sky-600 hover:underline"
                                         href="https://simplescraper.io" target="_blank">SimpleScraper</a>.
                        After every successful run SimpleScraper posts the data to the corresponding Web Hook which is
                        an
                        Endpoint of the JobTacker API.
                    </li>
                    <li>
                        Due to the nature of Web Scraping the data format can be messy at times. The API has to take
                        care of
                        that before saving the formatted data into the database.
                    </li>

                    <li>
                        The gathered data is now stored in the database and exposed to the web through several API
                        endpoints. At this point the API can be consumed by any type of Front-End Application (such as
                        this one).
                    </li>
                    <li>
                        <p>
                            Feel free to play around with the <a className="text-sky-600 hover:underline"
                                                                 href="https://jobtrackerdatamanager.azurewebsites.net/swagger"
                                                                 target="_blank">API
                        </a>.</p>
                        <p> Take a look at the available C# Jobs near Salzburg on the <Link
                            className="text-sky-600 hover:underline" to="/jobs"> Jobs Page </Link>.</p>
                    </li>
                </ul>

                <h2 className="my-2">Links</h2>
                <p><a className="text-sky-600 hover:underline"
                      href="https://dev.azure.com/RChris91/JobTrackerDataManager" target="_blank">Job Tracker Data
                    Manager (API)</a> Azure DevOps Project </p>
                <p><a className="text-sky-600 hover:underline" href="https://github.com/C-Rmoser/JobTracker"
                      target="_blank">Job Tracker Data Manager (API)</a> GitHub Repository </p>
                <br/>
                <p><a className="text-sky-600 hover:underline" href="https://github.com/C-Rmoser/job-tracker-react-ui"
                      target="_blank">Job Tracker React-UI</a> GitHub Repository </p>

            </div>
        </>
    );
};

export default ProjectDetails;
