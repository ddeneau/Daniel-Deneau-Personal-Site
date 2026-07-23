const ImagelessInformationBlock = (title, imageSrc, url, textBlock1, textBlock2) => {
    return(
        <div className="justify-items-center">
            <p className="font-semibold mt-2 mx-3 min-w-fit">
                <div className="flex flex-col">
                    {title} 
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Page
                        </a>
                    ) : null}
                </div>
            </p>
            {imageSrc ? (
                <img className="mh-1/8 mh-2/3 object-cover" src={imageSrc} alt="visual" />
            ) : null}
            <p className="text-left text-lg my-3">{textBlock1}</p>
            <p className='text-left text-lg py-3 my-3'>{textBlock2}</p>
            <div className="border border-red-400"></div>
        </div>
    )
}

export default ImagelessInformationBlock