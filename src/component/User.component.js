import React, { Component } from 'react'
import { Card, Avatar,Col,Row } from 'antd';
import { EditOutlined, EllipsisOutlined, PlusSquareOutlined, PlusSquareTwoTone, SettingOutlined } from '@ant-design/icons'
import Axios from 'axios';


import history from '../history';
import photo from '../images/abdo.jpeg'


export default class User extends Component {
    
    constructor(props) {
        super(props);
        //this.addUser=this.addUser.bind(this);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            users: [],
            listFilter: []
        };
    }
    
    componentDidMount() {
        Axios.get('http://localhost:5000/users/')
            .then(res => {
                this.setState({ users: res.data.data,
                    listFilter:res.data.data})
               console.log('users',res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addUser(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
    addListeUser(url){
        console.log('ici ------------')
        history.push(url) ;
        window.location.reload(false);
    }
onClick(Id){
    console.log('go----------------->')
    history.push('/EditUser/'+Id)
    window.location.reload(false);

    
}

deleteUser(id) {
    console.log(id)
    Axios.delete('http://localhost:5000/users/dellete/' + id)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce utilisateur ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.users.filter(elm=>(elm.last_name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
   render(){
    const { Meta } = Card;
        const user = Array.isArray(this.state.listFilter) && this.state.listFilter.map(user => {

                return(
                   
                    <Card
                        key={user.id}
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src={user.urlPhoto}
                        />
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src={user.urlPhoto} />}
                        title={user.first_name + ' ' + user.last_name}
                        description={user.email}
                        />
                  </Card>
                  
                  

)
  })
        return (
          <div style={{
            display: 'flex',
            alignItems:'center'}}>
                    {this.state.listFilter.map(user=>{
                        return (
                            
                        <Card
                        style={{
                            padding: '20px',
                            width: '330px',
                            height: '540px'}}
                        key={user.id}
                        
                        cover={
                        <img
                            alt="example"
                            src={user.urlPhoto}
                        />
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src={user.urlPhoto} />}
                        title={user.first_name + ' ' + user.last_name}
                        description={user.email}
                        />
                  </Card>
                  
           
                    )          
                  }     
                    )}
                <div className="center">
                    <Card className="card"  >
                        <span >
                       <PlusSquareTwoTone className="iconPlus" />
                             </span>
                    </Card>
                </div>
                
                </div>
                    
                
           
             
        )
        }
    }
                        