const JobCard = (props) => {
    const {title, location, company, linkToDetails, origin} = props;

    return (
        <div className="h-64 w-96 bg-amber-400 rounded-xl overflow-hidden">
            <a href="https://www.karriere.at" target="_blank">
                <div className="px-4 job-title bg-red-500 h-12 w-full flex flex-row justify-between items-center">
                    <h1 className="">{title}</h1>
                    <p>{origin}</p>
                </div>
            </a>
            <div className="px-4 job-company bg-blue-500 h-12 w-full flex flex-row items-center">
                <p>{company}</p>
            </div>
            <div className="px-4 job-company bg-blue-500 h-12 w-full flex flex-row items-center">
                <p>{location}</p>
            </div>
        </div>
    );
}

export default JobCard;