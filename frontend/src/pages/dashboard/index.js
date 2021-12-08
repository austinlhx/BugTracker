import React from 'react'
import SidebarWithHeader from '../../components/sidebar';
import { Flex, Stack } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import DoughnutChart from '../../components/charts/doughnut';

const DashboardPage = () => {
    const ticket_type_data = {
        labels: ['Bug', 'Feature Request', 'Customer Issue'],
        datasets: [
            {
                label: 'Types',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const ticket_status_data = {
        labels: ['New', 'In Progress', 'Resolved', 'Duplicate'],
        datasets: [
            {
                label: 'Status',
                data: [12, 19, 3, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const ticket_priority_data = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                label: 'Priority',
                data: [4, 13, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <SidebarWithHeader>
            <Flex
                justifyContent={'space-evenly'}>
                <Stack spacing='6'>
                    <DoughnutChart name="Tickets by Type" data={ticket_type_data} />
                    <DoughnutChart name="Tickets by Priority" data={ticket_status_data} />
                    <DoughnutChart name="Tickets by Status" data={ticket_priority_data} />
                </Stack>
                <TestingTable />
            </Flex>

        </SidebarWithHeader>
    )
}

const TestingTable = () => {
    return (
        <Flex w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            maxWidth={'50%'}
            maxHeight={'25%'}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'40px'}
            direction={'column'}
            justifyContent={'center'}>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Tickets
            </Text>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Flex>

    )
}

export default DashboardPage
