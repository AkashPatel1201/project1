import React from 'react';
import { Header } from '@components/Header';
import Head from "next/head";

const Contact = ():JSX.Element => {
  return (
    <>
    <Head>
      <title>Contact Page</title>
      <link rel="icon" href="icons/favicon.ico" />
    </Head>
    <Header/>
      <h1 className='text-2xl font-semibold'>This page is Contact Page</h1>
    </>
  )
}

export default Contact;