import React from 'react';
import waste from '../../../assets/waste (1).png'
import plant from '../../../assets/plant.png'

const Mission = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-xl p-6 py-8 mx-auto space-y-20 lg:px-8 lg:max-w-7xl">
                <div>
                   <p className="max-w-3xl mx-auto mt-4 text-xl text-center font-bold dark:text-gray-400">We’re on a mission to plant trees, green communities and empower
                        environmental stewards across Asia.</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center mx-20">
                    <div className="mt-5 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={plant}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 flex justify-center items-center transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <button className="mb-4 text-center font-bold px-5 py-2 rounded-full bg-emerald-800 text-gray-100">
                                    Plant More
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <div className="relative overflow-hidden transition  duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={waste}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 flex justify-center items-center opacity-0 hover:opacity-100">
                                <button className="mb-4 text-center font-bold px-5 py-2 rounded-full bg-emerald-800 text-gray-100">
                                    Collect Waste
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Mission;