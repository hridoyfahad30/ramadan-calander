import React from 'react';

const Date = (props) => {
    console.log(props.date);
    const {day} = props.date.date.hijri;
    const {date, weekday} = props.date.date.gregorian;
    const {Imsak, Sunset} = props.date.timings;
    return (
        <div>
            <div className='grid grid-cols-5 gap-4 justify-center items-center text-white border-b-2 border-slate-400 text-center'>
                
            <h1 className='xl:border-l-2 xl:pl-4 xl:border-r-2  xl:mr-20 text-sm xl:text-2xl xl:font-semibold my-2'>{day} Ramadan</h1>
            <h1 className='xl:border-r-2  xl:mr-20 text-sm xl:text-2xl xl:font-semibold my-2'>{date}</h1>
            <h1 className='xl:border-r-2  xl:mr-20 text-sm xl:text-2xl xl:font-semibold my-2'>{weekday.en}</h1>
            <h1 className='xl:border-r-2  xl:mr-20 text-sm xl:text-2xl xl:font-semibold my-2'>{Imsak}</h1>
            <h1 className='xl:border-r-2  xl:mr-20 text-sm xl:text-2xl xl:font-semibold my-2'>{Sunset}</h1>
        </div>
        </div>
    );
};

export default Date;