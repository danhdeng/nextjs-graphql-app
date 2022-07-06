import Head from 'next/head'
import { dehydrate, useQuery } from 'react-query';

import { queryClient, getPets } from '../src/api';

export async function getServerSideProps(){
  await queryClient.prefetchQuery("pets",() => getPets());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

const Home=()=> {
  const {data} =useQuery(["pets"], ()=>getPets());
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Home
