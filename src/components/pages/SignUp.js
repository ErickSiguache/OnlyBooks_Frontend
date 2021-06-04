import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { Container } from 'reactstrap';
import Cookies from 'universal-cookie';

const url="http://127.0.0.1:8000/api/login/";
const cookies = new Cookies();

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: [],
      form:{
        username: '',
        password: ''
      }
    })
  }
  //Toma los datos en tiempo real
  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }

    handleChange=async e=>{
      e.persist();
      await this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
      console.log(this.state.form);
      }

      //Proceso de peticion a la api
      IniciarSesion=async()=>{
       await axios.post(url,this.state.form).then(response=>{
          console.log(response.data);
          if(response.data === "Usuario no existe"){
            alert("El usuario ingresado no exite")
          }else{
            cookies.set('Token', response.data, {path: "/"});
            alert("Bienvenido" + cookies.get('Token'));
            window.location.href = "./HomeLogin";
          }
        }).catch(error=>{
          console.log(error.message);
        })
      }
      //Renderizado del formulario
  render() {
    return(
      <>
        <Container>
          <h1 className="title-cards"> Login </h1>
          <div className="container">
          <div className="container">
          <div className="form-group">
            <label htmlFor="id"> Nombre de Usuario </label>
            <input className="form-control" type="text" name="username" id="username" onChange={this.handleChange} placeholder="Escribir su nombre de Usuario" required/>
            <br />
            <label htmlFor="nombre"> Contraseña </label>
            <input className="form-control" type="password" name="password" id="password" onChange={this.handleChange} placeholder="Escribir su contraseña" required/>
            </div>
            <br/>
            <button className="btn btn-primary form-control" onClick={()=>this.IniciarSesion()}> Iniciar Sesion </button>
          </div>
          </div>
        </Container>
      </>
    );
  }
};

export default SignUp;