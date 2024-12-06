import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

// function PostsCard({value}) {
function PostsCard({ value }) {
    return (
        <>
            {/* // <Col lg={4} md={3}> */}
                {/* // <Col lg={4}> */}
                <Card>
                    <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                            {value.body}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            {/* // </Col> */}
        </>
    )
}

export default PostsCard;