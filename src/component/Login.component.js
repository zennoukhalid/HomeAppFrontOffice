import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Form,
   Input,
    Button,
     Checkbox,
      Image,
        Row,
           Col } from 'antd';
import { login } from '../services/ServiceLogin';
import history from '../history';
import "../css/Login.component.css";
import logo from '../images/logo.png';

import { Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email:"",
        password:"",
        error:""
        
    
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
}  

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}
onChangePassword(e) {
  this.setState({
      password: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault()
  
  const user = {
    email: this.state.email,
    password: this.state.password
  }
    console.log(user)
    
  login(user).then(res => {
    if (res) {
      localStorage.setItem('user', user);
      localStorage.setItem('loggedIn', true);
      console.log('ress-------',res)
      this.props.signIn(user);
      console.log("vous avez connecter")
      history.push('/Home')
        
    }
  })
}
    render() {
        return (
            <div>
      
                <Form
      {...layout}
      name="basic"
      className="form"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      onSubmit={this.onSubmit}
    >
      <div className="box">
         <Image
              
              width={100}
              src={logo}
              className="image"
              alt="Welcome to Home Zennou"
              preview={false}
            /> 
            {/* <br />
             <Title className="h1" level={2}>Home Zennou</Title> */}
   </div>
             
           
      <Form.Item
        className="input"
        label="Username"
        name="username"
        size="small"
        value={this.state.email}
        onChange={this.onChangeEmail}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="input"
        label="Password"
        name="password"
        value={this.state.password}
        onChange={this.onChangePassword}

        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      {/* <div style={{color: "red"}}>
                            {this.state.message1}
                        </div> */}

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary"  
          onClick={this.onSubmit}
          >
          Submit
        </Button>
      </Form.Item>
      {/* <div style={{color: "red"}}>
                            {this.state.message2}
                        </div> */}
    </Form>
          
          </div>
          
            
  
        )
    }
    
}

