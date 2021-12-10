import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
    Box,
    VStack,
    Flex,
    Text,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ name, data }) => {
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
    return (
        <VStack
            maxW={'100%'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'10px'}>
            <Text fontSize="xl" fontFamily="monospace" fontWeight="bold" align='center'>
                {name}
            </Text>
            <Box
                pos={'relative'}
                width={'90%'}>
                <Pie data={data} options={options} />
            </Box>
        </VStack>
    )
}

export default PieChart;