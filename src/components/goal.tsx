export function Goal({ title, frequency }) {
    return(
        <div className='border border-base-content border-opacity-60 rounded-lg w-full flex flex-col items-center'>
            <div className='border-b w-full'>
                <h1 className='text-2xl text-base-content text-center font-light m-4'>{title}</h1>
            </div>
            {frequency}
        </div>
    )
}