import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;
const { style_card_item } = StyleSheet.create({
  style_card_item: {
    backgroundColor: '#fff',
    width: widthDevice / 4,
    height: "75%",
    margin: "10%"
  }
});

const Assignment = () => {
  return (
    <Grid>
      <Row style={{ backgroundColor: 'pink' }}>
        <Row style={{
          backgroundColor: 'white',
          margin:15
        }}>

        </Row>
      </Row>
      <Row size={2} style={{ backgroundColor: 'orange' }}>
      </Row>
      <Row style={{ backgroundColor: 'green' }}>
        {/* <Col style={{
          backgroundColor: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}></Col>
        <Col style={{
          backgroundColor: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}></Col>
        <Col style={{
          backgroundColor: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}></Col>
        <Col style={{
          backgroundColor: 'white',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}></Col> */}
        <Col style={{ backgroundColor: 'green' }}>
          <View style={style_card_item}></View>
        </Col>
        <Col style={{ backgroundColor: 'green' }}>
          <View style={style_card_item}></View>
        </Col>
        <Col style={{ backgroundColor: 'green' }}>
          <View style={style_card_item}></View>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: 'purple' }}>

        </Col>
        <Col style={{ backgroundColor: 'yellow' }}>

        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: 'green' }}>

        </Col>
        <Col style={{ backgroundColor: 'pink' }}>

        </Col>
      </Row>
      <Row> 
        <Col style={{ backgroundColor: 'white' }}>

        </Col>
        <Col style={{backgroundColor: 'yellow' }}>

        </Col>
      </Row>
    </Grid>
  )
}

export default Assignment
