const InformationBlock = (title, imageSrc, url, textBlock1, textBlock2) => {
    return(
        <div>
            <p className="font-semibold mt-2 mx-11 min-w-fit">
                <div className="flex flex-col">
                    {title} 
                    <a className="mx-2 italic text-blue-400" href={url}>visit organization page</a>
                </div>
            </p>
            <img className="mh-1/8" src={imageSrc} alt="company visual"/>
            <p className="text-left text-lg my-3 mx-11">{textBlock1}</p>
            <p className='text-left text-lg py-10 my-3 mx-11'>{textBlock2}</p>
            <div className="border border-red-400"></div>
        </div>
    )
}

export default InformationBlock