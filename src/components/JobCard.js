const JobCard = (props) => {
    const {title, location, company, description, linkToDetails, origin} = props;

    return (
        <div className="text-gray-200 py-4 w-96 bg-amber-400 rounded-xl overflow-hidden bg-gray-900 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl">
            <a href={linkToDetails} target="_blank" rel="noreferrer">
                <div className="px-4 job-title pb-2 w-full flex flex-row justify-between items-center">
                    <h1 className="text-sky-500 ">{title}</h1>
                    <p className="pl-4 text-gray-500 self-start">{origin}</p>
                </div>
            </a>
            <div className="px-4 pt-2 pb-1 job-company w-full flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <p className="grow-0">{company}</p>
            </div>
            <div className="px-4 py-2 job-company w-full flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 self-start flex-none text-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="ml-2">{location}</p>
            </div>
            <div className="px-4">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default JobCard;