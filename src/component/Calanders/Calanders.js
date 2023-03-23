import React, { useEffect, useState } from 'react';
import background from '../../asset/bg.jpg'
import Date from '../Date/Date';

const Calanders = (city) => {

    const searchText = city.city;
    // console.log(searchText);

    const [calander, setCalander] = useState([])
    useEffect( () => {

        fetch(`https://api.aladhan.com/v1/hijriCalendarByCity/1444/9?city=${searchText}&country=Bangladesh&method=2`)
        .then(res => res.json())
        .then(data => setCalander(data.data))

    }, [])


    return (
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}} className='container mx-auto rounded-2xl py-6'>

            <div className='grid grid-cols-5 mb-2 border-b-2 '>
                <div className='mx-2 xl:mx-6 '>
                    <h1 className='text-lg xl:text-2xl text-white mb-2'>Ramadan</h1>
                </div>
                <div className='mx-6'>
                    <h1 className='text-lg xl:text-2xl text-white mb-2'>Date</h1>
                </div>
                <div className='mx-6'>
                    <h1 className='text-lg xl:text-2xl text-white mb-2'>Day</h1>
                </div>
                <div className='mx-6'>
                    <h1 className='text-lg xl:text-2xl text-white mb-2'>Sahri</h1>
                </div>
                <div className='mx-6'>
                    <h1 className='text-lg xl:text-2xl text-white mb-2'>Iftar</h1>
                </div>
            </div>


            <div className='ml-2 xl:mx-8'>
                {
                    calander.map((date, index) => <Date key={index} date={date}></Date>)
                }
            </div>
            
        </div>
    );
};

export default Calanders;