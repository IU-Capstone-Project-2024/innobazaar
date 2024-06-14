import axios from 'axios';
import React from 'react';

class App extends React.Component {
  
  state = { details: [], }

  componentDidMount(){

    let data;
    const requestData = {
      limit: 5,
      category: 'books'
    };
  
    axios.post('http://localhost:8000/front/v1/products', requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => { })

  }


  render() {
    const { products } = this.state.details;
    return (
      <div>
        {products.map((product, id) => (
          <div key={id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price} ------ Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    );
  }


}

export default App;
