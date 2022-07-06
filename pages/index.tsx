import { Card, Grid, Title,Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
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
      <Grid>
        {data?.pets.map((pet, index)=>(
          <Grid.Col xs={12} md={6} lg={4} key={[pet.name, index].join(":")} p={5} >
            <Link href={`pet/${pet.name}`} passHref>
              <Card>
                <Card.Section>
                  <Image height={250} width={350} src={pet.image} alt="green iguana" />
                </Card.Section>
                <Title order={3}>{pet.name}</Title>
                <Text>
                  {pet.weight} pounds {pet.ageInWeeks} weeks old{"    "}
                  {pet.sex.toLowerCase()}  {pet.breed.toLowerCase()}
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export default Home
