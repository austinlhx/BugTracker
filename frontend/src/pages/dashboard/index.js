import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
    Text,
    VStack,
    HStack
} from '@chakra-ui/react'
import DoughnutChart from '../../components/charts/doughnut';
import { useSelector, useDispatch } from "react-redux";
import userServices from '../../services/userServices';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    if (email != null) {
        userServices.findUser(email).then(res => console.log(res))
        // const action = {
        //     type: 'add-user',

        // };
        // dispatch(action);
    }
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
        <VStack spacing='6'>
            <HStack spacing='6' justify={'space-evenly'} w={'full'}>
                <DoughnutChart name="Tickets by Type" data={ticket_type_data} />
                <DoughnutChart name="Tickets by Priority" data={ticket_status_data} />
                <DoughnutChart name="Tickets by Status" data={ticket_priority_data} />
            </HStack>
            <HStack justify={'space-evenly'} w={'full'}>
                <TicketsTable />
                <ProjectsTable />
            </HStack>
        </VStack>
    )
}

const TicketsTable = () => {
    const tickets = useSelector((state) => state.tickets);
    const display_tickets = tickets.slice(0, 3);
    return (
        <VStack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'10px'}>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Tickets
            </Text>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Name </Th>
                        <Th>Project</Th>
                        <Th>Description</Th>
                        <Th>Created Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {display_tickets.map((ticket) => (
                        <Tr key={ticket.id}>
                            <Td>{ticket.name}</Td>
                            <Td>{ticket.project}</Td>
                            <Td>{ticket.description}</Td>
                            <Td>{ticket.created_date}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </VStack>

    )
}

const ProjectsTable = () => {
    const projects = useSelector((state) => state.projects);
    const display_projects = projects.slice(0, 3);
    return (
        <VStack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'10px'}>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Projects
            </Text>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Name </Th>
                        <Th>Description</Th>
                        <Th>Create Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {display_projects.map((project) => (
                        <Tr key={project.id}>
                            <Td>{project.name}</Td>
                            <Td>{project.description}</Td>
                            <Td>{project.created_date}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </VStack>

    )
}


export default DashboardPage
