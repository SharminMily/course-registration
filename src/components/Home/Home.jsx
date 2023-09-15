import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
// import { PiCurrencyDollarBold } from 'react-icons/fa';
import {FaBookmark } from 'react-icons/fa';



const Home = () => {

    const [allCourse, setAllCourse] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    return (
        <div className="flex justify-between max-w-screen-xl mx-auto my-10 py-5 px-8 md:px-8 lg:px-8">
            <div className="w-3/4 grid grid-cols-3 gap-4 p-4">
                {
                    allCourse.map(cours => (
                        // eslint-disable-next-line react/jsx-key
                        <div key={cours.id} className="card bg-base-100 shadow-xl">
                            <figure><img className="w-full h-60" src={cours.image} alt="Shoes" /></figure>
                            <div className="card-body p-0 my-4 mx-4">
                                <h2 className="card-title text-xl py-2">{cours.title}</h2>
                                <p className="text-gray-600 text-base">{cours.description}</p>

                                <div className="flex justify-between  m-0">                                     
                                    <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>Price: {cours.price}</p>
                                    </div>
                                   
                                    <div className="flex justify-center align-middle text-center">
                                        {/* BsBookmarks */}
                                        <p className="flex justify-center p-[5px]"><FaBookmark /></p>
                                        <p>Credit: {cours.credit}hr</p>

                                    </div>
                                </div>
                                <div className="">
                                    <button className="mt-2 p-2  rounded-lg bg-blue-600 text-lg text-white w-full">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>


            <div className="w-1/4">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;