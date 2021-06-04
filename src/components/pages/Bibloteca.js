import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Card from 'react-bootstrap/Card';

let url="http://127.0.0.1:8000/api/libro/";

class Bibloteca extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: []
    })
  }
  componentDidMount() {
    axios.get(url)
        .then(response => {
          console.log(response.data)
            this.setState({
                data: response.data.libros
            })
        })
        .catch(error => {
          console.log(error)
        })
  }
  render() {
    return(
      <>
        <div className="title-cards">
          <h1>Libros que Ofrecemos</h1>
        </div>
        <div className="container">
        <div class="row">
          {this.state.data.map(nombre =>{
            return(
              <>
                <div class="col-sm-3">
                  <Card style={{ width: '18rem' }}><center>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" />
                    <Card.Body>
                      <Card.Title> {nombre.tituloLibro} </Card.Title>
                      <Card.Text> {nombre.description}  </Card.Text>
                      <a href="#">Leer Màs</a>
                    </Card.Body></center>
                  </Card>
                </div>
              </>
            )
          })}
        </div>
      </div>
        
    </>

    )
    
  }
};

export default Bibloteca;