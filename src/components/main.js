import React from 'react'
import { Row, Col } from 'reactstrap'
import Categories from './categories'


function MainView(props) {
    return (
        <Row>
            <Col sm="3">
                {/* available categories */}
                <Categories />
            </Col>
            <Col sm="9">

            </Col>
        </Row>
    )
}

export default MainView
