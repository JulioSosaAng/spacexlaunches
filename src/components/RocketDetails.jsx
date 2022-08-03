import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import { Box , Flex , Text , Spacer, Spinner } from "@chakra-ui/react";

import dayjs from "dayjs";
import "dayjs/locale/es";


export function RocketDetail (){
    const [rocket, setLaunch] = useState({});
    const { rocketId } = useParams();

    useEffect(() => {
        API.getLaunchByRocketNumber(rocketId).then (setLaunch).catch(console.log);
    }, [rocketId])
        return (
            <div>
                <Box bg="gray.100" p={4} m={4} borderRadius="lg">
                    {!rocket ? (<Box display="flex" alignItems="center" justifyContent="center"><Spinner thickness='4px'speed='0.65s'emptyColor='gray.200'color='red.500'size='xl' /></Box >) : (
                        <>
                            <Flex display="flex">
                                <Text fontSize="2xl">
                                    Cost Per Launch <strong>{rocket.cost_per_launch}</strong>
                                </Text>
                                <Spacer />
                            </Flex>
                            <Flex display="flex">
                                <Text fontSize="2xl">
                                    First Flight <strong>{dayjs (rocket.first_flight).locale("es").format("D MMMM, YYYY")}</strong>
                                </Text>
                            </Flex>
                            <Flex display="flex">
                                <Text fontSize="2xl">
                                    <strong>Details</strong>
                                </Text>
                            </Flex>
                            <Flex display="flex">
                                <Text fontSize="md">
                                    {rocket.description}
                                </Text>
                            </Flex>
                        </>
                    )}
                    
                </Box>
            </div>
        )
}