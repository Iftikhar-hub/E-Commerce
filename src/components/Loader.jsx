const Loader = () => {
    let circleCommonClasses = 'h-7 w-2 bg-red-800   rounded-full';

    return (
        <div className='flex'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce`}></div>
        </div>
    );
};

export default Loader;