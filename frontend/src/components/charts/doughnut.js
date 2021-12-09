import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ name, data }) => {
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: true
    }
    return (
        <Flex
            maxW={'50%'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'10px'}
            alignItems="center"
            justifyContent="center">
            <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
                {name}
            </Text>
            <Doughnut data={data} options={options} />
        </Flex>
    )
}

export default DoughnutChart
