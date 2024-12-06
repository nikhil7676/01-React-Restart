import React from 'react'
import { posts } from './data/productDetails'
import PostsCard from './Components/PostsCard'
import { Container, Col, Row } from 'react-bootstrap'

function Posts() {
    return (
        // <>
            <Container>
                <Row>
                    {
                        posts.map((value, index) => (
                            <Col lg={4} md={3}>
                                <PostsCard value = {value} key={index} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        // </>
    )
}

export default Posts