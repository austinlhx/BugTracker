import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
    Box,
    Button,
    chakra
} from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import ticketServices from '../../services/ticketServices';

const TicketsPage = () => {
    const [tickets2, setTickets] = useState([]);
    useEffect(() => ticketServices.findAllTickets()
        .then(tickets2 => setTickets(tickets2)), []);
    const tickets = useSelector((state) => state.tickets);
    const data = React.useMemo(
        () => tickets,
        [],
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Project',
                accessor: 'project',
            },
            {
                Header: 'Submitter',
                accessor: 'submitter',
            },
            {
                Header: 'Assigned Dev',
                accessor: 'assigned_developer',
            },
            {
                Header: 'Priority',
                accessor: 'priority',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Create Date',
                accessor: 'created_date',
            },
        ],
        [],
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy)

    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'20px'}
            padding={'10px'}>
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    isNumeric={column.isNumeric}
                                >
                                    {column.render('Header')}
                                    <chakra.span pl='4'>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <TriangleDownIcon aria-label='sorted descending' />
                                            ) : (
                                                <TriangleUpIcon aria-label='sorted ascending' />
                                            )
                                        ) : null}
                                    </chakra.span>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                        {cell.render('Cell')}
                                    </Td>
                                ))}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Box>

    )
}

export default TicketsPage
