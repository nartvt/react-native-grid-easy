import React from 'react'
import { View, Text } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';

const EasyGridComponent = () => {
  return (
    <Grid>
      <Row style={{backgroundColor: 'red'}}>
      </Row>
      <Row style={{ backgroundColor: 'green' }}>
        <Col style={{backgroundColor:'blue'}}></Col>
        <Col style={{ backgroundColor: 'yellow' }}></Col>
      </Row>
      <Row style={{ backgroundColor: 'black' }}>
        <Col style={{ backgroundColor: 'yellow' }}></Col>
        <Col style={{ backgroundColor: 'pink' }}></Col>
        <Col style={{ backgroundColor: 'grey' }}></Col>
      </Row>
      {/* <Col style={{ backgroundColor: 'red' }}>
      </Col>
      <Col style={{ backgroundColor: 'green' }}>

      </Col> */}

   </Grid>
  )
}

export default EasyGridComponent
