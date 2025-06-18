const ImagelessInformationBlock = (title, imageSrc, url, textBlock1, textBlock2) => {
    return(
        <div>
            <p className="font-semibold mt-2 mx-11 min-w-fit">
                <div className="flex flex-col">
                    {title} 
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Page
                        </a>
                    ) : (
                        null
                    )}
                </div>
            </p>
            {imageSrc ? (
                <img className="mh-1/8" src={imageSrc} alt="visual" />
            ) : (
                null
            )}
            <p className="text-left text-lg my-3 mx-11">{textBlock1}</p>
            <p className='text-left text-lg py-3 my-3 mx-11'>{textBlock2}</p>
            <div className="border border-red-400"></div>
        </div>
    )
}

export default ImagelessInformationBlock