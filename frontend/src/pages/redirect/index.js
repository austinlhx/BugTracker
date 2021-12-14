import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button
} from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import userServices from '../../services/userServices';

const RedirectPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    if (email != null) {
        userServices.findUser(email).then(res => {
            const action = {
                type: 'add-user',
                newUser: res[0]
            };
            dispatch(action);
        })
    }
    return (
        <Button onClick={() => navigate('/dashboard')}>To Dashboard</Button>
    )
}

export default RedirectPage
