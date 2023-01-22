import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer aria-label="Site Footer" class="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center  sm:justify-start">
                        <Link
                            to='/'
                            aria-label='Neat Bangladesh'
                            title='Neat Bangladesh '
                            className='inline-flex items-center'
                        >

                            <span className='ml-2 tracking-wide text-2xl font-bold text-emerald-800'>
                                Neat Bangladesh
                            </span>
                        </Link>
                    </div>

                    <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2023. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;