import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Header } from '@components/Header';

const ErrorPage = ():JSX.Element => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return (
        <>
            <Header />
            <div className='text-center mt-5 py-5'>
                <h1 className='text-2xl font-semibold py-5'>We are Sorry,Page is not found.</h1>
                {/* <Link href="/" className='bg-black text-white py-3 px-4 rounded-lg'>Back to Home</Link> */}
            </div>
        </>
    )
}

export default ErrorPage;