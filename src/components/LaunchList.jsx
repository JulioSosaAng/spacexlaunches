import { useState , useEffect } from 'react';
import { Heading, Spinner, Box } from '@chakra-ui/react';
import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchesList () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log());
    }, []);

    return (
        <>
        <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
        </Heading>
        {launches.length == 0 ? (<Box display="flex" alignItems="center" justifyContent="center"><Spinner thickness='4px'speed='0.65s'emptyColor='gray.200'color='blue.500'size='xl' /></Box >) : (
            <section>
            {launches.map((launch) => (
                <LaunchItem key ={launch.flight_number} {...launch} />
            ))}
            </section>
        )}
        
        </>
    )
}




