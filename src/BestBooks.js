import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Jumbotron } from 'react-bootstrap';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     userData: []
    }
  
  }

   componentDidMount = async  () => {
    const { user } = this.props.auth0;
    //http://localhost:3001/books?userEmail=eng.yazanodeh@gmail.com
    let url = `http://localhost:3001/books?userEmail=${user.email}`
    let resData = await axios.get(url);

    await this.setState({
      userData: resData.data
    })
    console.log(this.state.userData)
  }
  
   
  

  
  render() {

    
    return (
      <>
         
    
        {this.state.userData == null ?
          <Jumbotron>
            <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p>
          </Jumbotron>
          :

          this.state.userData.map(item => {
            return(
            <Card>
              <Card.Body>Name :{item.name}</Card.Body>
              <Card.Body>Description :{item.description}</Card.Body>
              <Card.Body>Status : {item.status}</Card.Body>
            </Card>
        )  })

        }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
