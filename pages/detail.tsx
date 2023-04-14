import React from 'react';
import { Header } from '@components/Header';
import Head from "next/head";

const Detail = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Detail Page</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <Header />
      <h1 className='text-2xl font-semibold'>This page is Detail Page</h1>
    </>
  )
}

export default Detail;