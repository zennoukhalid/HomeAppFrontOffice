import React, { useState } from 'react'
import { adduser } from '../services/ServiceAdduser';
import history from '../history';
import { Input,Select } from 'antd';
const { Option } = Select;


const initailState ={
    nom:'',
    prenom:'',
    email:'',
    password:'',
    role:'',
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    passwordEror:'',
    roleEror:'',
    message:'',
    addS: null

}
export default function AddUser() {
    const [firstName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [roles, setRoles] = useState(["Admin","User"]);
    const [urlPhoto, setUrlPhoto] = useState("");

    const [firstNameEror, setFirsNameEror] = useState("");
    const [lastNameEror, setLastNameEror] = useState("");
    const [emailEror, setEmailEror] = useState("");
    const [passwordEror, setPasswordEror] = useState("");
    const [roleEror, setRoleEror] = useState("");
    const [urlPhotoEror, setUrlPhotoEror] = useState("");
    

    // constructor(props) {

    //     this.state=initailState;


    //     }
        const handleChangeFirstName = (event) => {
            setFirsName(event.target.value);
        };
        const handleChangeLastName = (event) => {
            setLastName(event.target.value);
        };
        const handleChangeEmail = (event) => {
            setEmail(event.target.value);
        };
        const handleChangePassword = (event) => {
            setPassword(event.target.value);
        };
        const handleChangeRole = (event) => {
            console.log("===>",event.target.value)
            // setRole(event.target.value);
        };
        const handleChangeUrlPhoto = (event) => {
            setUrlPhoto(event.target.value);
        };

        /*la fonction de validation */
       
       const validate =()=>{
            let nomEror="";
            let prenomEror="";
            let emailEror="";
            let passwordEror="";
            let roleEror="";
            let urlPhotoEror="";


            if(!firstName){
                nomEror="le champ Nom est obligatiore"
            }
            if(!lastName){
                prenomEror="le champ Prenom est obligatiore"
            }
            if(!role){
                roleEror="le champ role est obligatiore"
            }
            if(!password.match(/^([\w.%+-]+)/i)){
                passwordEror="le champ mot de passe est obligatiore"
            }
            if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(!urlPhoto){
                urlPhotoEror="le champ Url photo est obligatiore";
            }
            if(emailEror||nomEror||prenomEror||passwordEror||roleEror||urlPhotoEror){
                setEmailEror(emailEror);
                setFirsNameEror(nomEror);
                setFirsNameEror(passwordEror);
                setRoleEror(roleEror);
                setPasswordEror(passwordEror);
                setUrlPhoto(urlPhotoEror);
                return false;
            }

            return true;
            
        }

       const onSubmit=(e)=> {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            // const user = {
            //     nom: nom,
            //     prenom: prenom,
            //     email: email,
            //     password: password,
            //     role: role

    
            // }
            // console.log(user)
           

            // const isValid=this.validate();  
            // if(!!isValid){
            //     console.log(user);
            //     adduser(user).then(res => {
            //     console.log("il est envoyer");
            //     this.setState(initailState);
            //     this.setState({
            //         addS: "Un Utilisateur Ajouté "
            //     })
                    
            //       })
                
            // }else{
            //     console.log("il a un probleme dans la validation des informations")
            // }
                     
    }

    const annuler=(e)=>{
        // history.push('/users');
        // window.location.reload(false); 
    }
  
    
        return (
            <div className="db">
                    <form onSubmit={onSubmit}  class="text border border-light p-5">
                    {/* <div className={addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div> */}
                    <b>Ajouter un utilisateur</b>
                    <hr/>   
                    <div class="row">
                        <div className="col-md-6">
                                <label>First Name: </label>
                                <Input type="text"
                                    required  
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleChangeFirstName}
                                />
                                 {/* <div style={{color:"red"}}>{nomEror}</div> */}
                            </div>
                        
                    
                    <div className="col-md-6">
                                <label>Last Name: </label>
                                <Input type="text"
                                    required
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleChangeLastName}
                                />
                                {/* <div style={{color:"red"}}>{prenomEror}</div> */}
                            </div>
                            
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label>Email: </label>
                                <Input type="email"
                                    required
                                    placeholder="Email" 
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                                 {/* <div style={{color:"red"}}>{emailEror}</div> */}
                            </div>
                           
                    
                    <div className="col-md-6">
                                <label>Password: </label>
                                <Input type="password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    
                                />
                                {/* <div style={{color:"red"}}>{passwordEror}</div> */}
                            </div>
                            
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <div class="form-group">
                                    <label for="role">Role:</label>
                                    <Select 
                                    required
                                    label="Role (Required)"
                                    placeholder="Role"
                                    style={{ width: 565 }}
                                     id="role"
                                    value={role}
                                    onChange={handleChangeRole}
                                    options={roles}>
                            
                                    </Select>
                                    {/* <div style={{color:"red"}}>{roleEror}</div> */}
                                    </div>
                            
                    </div>
                    </div>
                   
                    <div className="col-md-12">
                    <button style={{float:"right"}} type="button" class="btn btn-success" onClick={onSubmit} >Ajouter</button> 
                    <button style={{float:"right"}} type="button" class="btn btn-danger" onClick={annuler } >Annuler</button>   
                    </div>

                    </form>
      
      </div>
        
        )
    
}