import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity, Alert } from 'react-native'

export default class HeaderC extends Component {
  state = {
    isLogin:false
    
  }
  renderHeader = () => {
    return <View>
      <Text> Header Class </Text>
    </View>
  }
  title = "hello React native";
  renderTitle = () => {
    return (
      <Text>
        Hello 123
      </Text>
    )
  }
  handleShowMessage = () => {
    this.state.isLogin = true;
  }
  login = () => {
    // thay doi gia tri isLogin , nhung khong render lai giao dien
    // this.state.isLogin = true;
    let newState = { isLogin: true };
    this.setState(newState);
  }
  renderContent = () => {
    if (this.state.isLogin) {
      return (<Text>{this.title} </Text>);
    }
    return (<TouchableOpacity onPress={this.login}>
      <View style={{ padding: 15, backgroundColor: 'orange', borderRadius: 10 }}>
        <Text>Login</Text>
      </View>
    </TouchableOpacity>);
  }
  render = ()=> {
    // this.renderHeader();
    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        {/* <Text style={{ fontSize: 50, color: 'red', alignItems: 'center' }}>{this.title} </Text> */}
        {/* <Text style={{ fontSize: 50, color: 'red', alignItems: 'center' }}>{this.renderTitle()} </Text> */}
        {/* {
          this.isLogin === true ? <Text>{this.title} </Text> : <TouchableOpacity onPress={this.login}>
            <View style={{ padding: 15, backgroundColor: 'orange', borderRadius: 10 }}>
              <Text>Login</Text>
            </View>
          </TouchableOpacity>
        } */}
        {this.renderContent()}
       
      </View>
    )
  }
}
