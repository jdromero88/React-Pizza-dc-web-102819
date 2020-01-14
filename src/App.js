import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const URL = 'http://localhost:3000/pizzas'

class App extends Component {
  state = {
    originalPizzas: [],
    showPizzas:[],
    pizzaToEdit: ''
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(originalPizzas => this.setState({
      originalPizzas, showPizzas: originalPizzas
    }))
  }

  handleClick = pizzaToEdit => {
    console.log(pizzaToEdit)
    this.setState({pizzaToEdit})
  }

  submitPizza = e => {
    e.preventDefault()
    if(this.state.pizzaToEdit !== ''){
      console.log('i need to submi the pizza', this.state.pizzaToEdit)
      let newPizza = this.state.pizzaToEdit
      let confObj = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          Accept:'application/json'
        },
        body: JSON.stringify({
          topping: newPizza.topping,
          size: newPizza.size,
          vegetarian: newPizza.vegetarian
        })
      }
      fetch(`${URL}/${newPizza.id}/edit`, confObj)
      .then(res => res.json())
      .then(pizza => console.log(pizza))
      .catch(err => console.warn(err.message))
    }else {
      alert('Must select a pizza to edit!')
    }
  }

  handleTopping= e => {
    console.log(e.currentTarget.value)
    this.setState({pizzaToEdit: {...this.state.pizzaToEdit,
        topping: e.currentTarget.value
      }
    })
  }
  handleSize= e => {
    console.log(e.currentTarget.value)
    this.setState({pizzaToEdit:{...this.state.pizzaToEdit,
        size: e.currentTarget.value
      }
    })
  }
  handleVegetarian= e => {
    console.log(e.currentTarget.value)
    let veg = e.currentTarget.value === 'true'
    this.setState({pizzaToEdit:{...this.state.pizzaToEdit,
        vegetarian: veg
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm editPizza={this.state.pizzaToEdit}
          handleTopping={this.handleTopping}
          handleSize={this.handleSize}
          handleVegetarian={this.handleVegetarian}
          submitPizza={this.submitPizza}
        />
        <PizzaList showPizzas={this.state.showPizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
