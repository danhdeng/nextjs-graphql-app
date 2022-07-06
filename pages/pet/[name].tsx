import React from 'react'
import { Card, Grid, Title,Text, Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { dehydrate, useQuery } from 'react-query';
import { queryClient, petByName } from '../../src/api';

export async function getServerSideProps({params}:{params:any}){
  await queryClient.prefetchQuery("pet",() => petByName({name:params.name}));
  return {
    props: {
        name: params.name,
        dehydratedState: dehydrate(queryClient),
    }
  }
}
const PetDetails: React.FunctionComponent<{
    name: string
}> = ({name}) =>{
    const {data} =useQuery(["pet"], ()=>petByName({name}));
  return (
    <Grid>
        <Grid.Col xs={12} md={6} lg={4}>
            <Image src={data?.pet?.image} alt={data?.pet?.name} height={250} width={500} />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={4}>
            <Title order={1}>{data?.pet?.name}</Title>
            <Grid mt={4}>
               <Grid.Col span={4}>
            <Title order={5}>Age</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data?.pet?.ageInWeeks} weeks</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={5}>Breed</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data?.pet?.breed}</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={5}>Sex</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data?.pet?.sex}</Text>
          </Grid.Col>
          {data?.pet?.color && (
            <>
              <Grid.Col span={4}>
                <Title order={5}>Color</Title>
              </Grid.Col>
              <Grid.Col span={8}>
                <Text>{data?.pet?.color}</Text>
              </Grid.Col>
            </>
          )}
            </Grid>
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={4}>
        <Button fullWidth>Adopt {data?.pet?.name}</Button>
      </Grid.Col>
    </Grid>
  )
}

export default PetDetails;
