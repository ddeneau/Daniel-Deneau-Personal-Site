const InformationTitle = (title, textBlock1, textBlock2) => {
    <div>
    <p className="font-semibold pb-12 my-11 mx-11 min-w-fit">{title}</p>
    <p className="text-left my-11 mx-11">{textBlock1}</p>
    <p className='text-left py-10 my-11 mx-11'>{textBlock2}</p>
    <div className="border border-red-400"></div>
</div>
}

export default InformationTitle