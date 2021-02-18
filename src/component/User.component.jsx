import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


export default function User(props) {

    const [usersList, setUsersList] = useState([]);
    useEffect(() => Axios.get('http://localhost:5000/users/')
    .then(res => {
        setUsersList({ users: res.data.data,
            listFilter:res.data.data})
       console.log('users',usersList)   
    }) 
    .catch((error) => {
        console.log(error);
    }), []);



    return (
        <div style={{
            display: 'flex',
            alignItems:'center'}}>
                    {usersList.users.map((user)=>{
                        return (
                            
                        <Card
                        style={{
                            padding: '20px',
                            width: '330px',
                            height: '520px'}}
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
             
               
                
                </div>
    )
    
}