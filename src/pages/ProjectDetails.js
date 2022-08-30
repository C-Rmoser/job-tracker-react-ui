const ProjectDetails = () => {
    return (<>
            <h1>Project Details</h1>

            <h2>Where does the  data come from?</h2>
            <p>
                The job data is gathered in fixed intervals from <a className="text-sky-600 hover:underline" href="https://www.karriere.at">karriere.at</a> and <a className="text-sky-600 hover:underline" href="https://www.devjobs.at">devjobs.at</a> by
                a tool called <a className="text-sky-600 hover:underline" href="https://simplescraper.io">SimpleScraper</a>.
                After every successful run SimpleScraper posts the data to the corresponding Web Hook which is an Endpoint of the JobTacker API.
            </p>
            
            <p>
                Due to the nature of Web Scraping the data format can be messy at times. The API has to take care of that before saving the formatted data into the database.
            </p>
            
            <p>
                The gathered data is now stored in the database and exposed to the web through several API endpoints. At this point the API can be consumed by any type of Front-End Application (such as this one).
            </p>

        </>
    );
};

export default ProjectDetails;
