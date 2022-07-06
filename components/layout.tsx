import { AppShell, Navbar, Header, useMantineTheme, Box, Title, MediaQuery, Burger, Text } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Home, DogBowl } from "tabler-icons-react";

export default function Layout({ children }:{children: any}) {
    const theme=useMantineTheme();
    const [opened, setOpened] =useState(false);
  return (
    <div>
    <Head>
    <title>Oregon Human Adoptable Dogs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar 
            width={{ sm: 200 }} 
            height={500} 
            p="md"
            hidden={!opened}
            hiddenBreakpoint="sm">
            {/* Navbar content */}
            <Link href="/" passHref>
                <Box sx={{display: 'flex',}}>
                    <Home />
                    <Title order={5} ml={10}>Home</Title>
                </Box>
            </Link>
        </Navbar>}
      header={
        <Header 
            height={60} 
            p="xs"
            sx={(theme)=>({
                backgroundColor: theme.colors.blue[9],
                color:"white",
            })}
        >
            {/* Header content */}
            <div
                style={{
                    display:"flex",
                    alignItems: "center",
                    height: "100%"
                    
                }}
            >
                <MediaQuery largerThan="sm" styles={{display:"none",}}>
                    <Burger
                        opened={opened}
                        onClick={() =>setOpened((o)=>!o)}
                        size="sm"
                        color={theme.colors.gray[3]}
                        mr="xl"
                    />
                </MediaQuery>
                <DogBowl />
                <Text ml={10} size="md">
                    Oregon Humane Adoptable Dogs
                </Text>
            </div>
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
      {children}
    </AppShell>
    </div>
  );
}