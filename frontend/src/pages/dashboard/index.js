import React from 'react'
import SidebarWithHeader from '../../components/sidebar';
import { Flex, Stack, HStack, VStack } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'
import DoughnutChard from '../../components/charts/doughnut';

const DashboardPage = () => {
    return (
        <SidebarWithHeader>
            <Flex>
                <Stack spacing={{ base: '0', md: '6' }}>
                    <DoughnutChard name="Tickets by Type" />
                    <DoughnutChard name="Tickets by Priority" />
                    <DoughnutChard name="Tickets by Status" />
                </Stack>
                <TestingTable />
            </Flex>

        </SidebarWithHeader>
    )
}

const TestingTable = () => {
    return (

        <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
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
            <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}

export default DashboardPage
