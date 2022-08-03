import { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import * as API from "../services/launches";
import { Box , Flex , Tag , Text , Spacer, Button, Spinner } from "@chakra-ui/react";


export function LaunchDetail () {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then (setLaunch).catch(console.log);
    }, [launchId])
        return (
            <div>
                <Box bg="gray.100" p={4} m={4} borderRadius="lg">
                    {!launch ? (<Box display="flex" alignItems="center" justifyContent="center"><Spinner thickness='4px'speed='0.65s'emptyColor='gray.200'color='red.500'size='xl' /></Box >) : (
                        <>
                            <Flex display="flex">
                                <Text fontSize="2xl">
                                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                                </Text>
                                <Spacer />
                                    <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                                        {launch.launch_success ? "Success" : "Failure"}
                                </Tag>
                            </Flex>
                            <Flex display="flex">
                                <strong>Rocket : </strong>
                            </Flex>
                            <Flex display="flex">
                                <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                                    <Button colorScheme="purple">
                                        {launch.rocket?.rocket_name}
                                    </Button>
                                </Link>
                            </Flex>
                        </>
                    )}
                    
                </Box>
            </div>
        )
}





//LaunchDetail