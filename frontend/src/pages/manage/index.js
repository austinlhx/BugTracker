import React, { useState, useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
    Box,
    chakra,
    Button
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import SidebarWithHeader from '../../components/sidebar';
import userServices from '../../services/userServices';

const ManageUserPage = () => {
    // const projects = useSelector((state) => state.projects);
    const [users, setUser] = useState([]);
    useEffect(() => userServices.findAllUsers()
        .then(res => setUser(res)), []);
    const data = React.useMemo(
        () => users,
        [users],
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Role',
                accessor: 'role',
            },
            {
                Header: 'Join Date',
                accessor: 'date',
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => {
                    return (
                        <Box>
                            <Button>Edit</Button>
                            <Button onClick={() => userServices.deleteUser(row.original.email)}>Delete</Button>
                        </Box>
                    )
                }
            },
        ],
        [],
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy)

    return (
        <SidebarWithHeader>
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
        </SidebarWithHeader>
    )
}

export default ManageUserPage