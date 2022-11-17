// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar, extendTheme } from '@chakra-ui/react'
import MailTo from '../components/MailTo';
// import {GET_POSTINGS} from '../utils/queries';



// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(GET_POSTINGS);

    //Temporary Data to design page
    let data = [
        {
            _id: 0,
            title: "Test Title",
            description: "Coolest Project",
            owner: "TestOwner",
            email: "testemail@test.com"

        },
        {
            _id: 1,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 2,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 3,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 4,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 5,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 6,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 7,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
    ]

    return (
        <>
            <div className='postings'>
                <Heading size='2xl' py='15'>Project Postings</Heading>
                <Stack spacing="4" alignItems="center">
                    {data.map(({ _id, title, description, email, owner }) => (
                        <Card key={_id} maxW='90vw' minW='50vw' size='lg' border='thick' borderColor='black' borderStyle='solid' >
                            <Link
                                to={`/posting/${_id}`}
                            >
                                <CardHeader>
                                    <Heading size='lg'>{title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{description}</Text>
                                </CardBody>
                            </Link>
                            <Divider />
                            <CardFooter py='1'>
                                <MailTo email={email} label={`Email ${owner}`} />
                                <Avatar name='test' src={'./icons8-user-32.png'} />
                            </CardFooter>
                        </Card>
                    ))}
                    <br />
                </Stack>

            </div>

        </>

    )


}