import { Header } from "..";
import Head from "next/head";

export const Container = ({children}:any) => {
  return (
    <>
    {children}
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="icons/favicon.ico" />
    </Head>
    <Header/>
    <h1 className='text-2xl font-semibold'>This page is Home Page</h1>
    </>
  )
};
