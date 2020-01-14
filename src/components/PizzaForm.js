import React from "react"

const PizzaForm = (props) => {
  const {id, topping, size, vegetarian} = props.editPizza
  // console.log(vegetarian);
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={props.handleTopping} value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={props.handleSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name='veggie' value={true} onChange={props.handleVegetarian} checked={null/*vegetarian*/}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='veggie' value={false} onChange={props.handleVegetarian} checked={null/*!vegetarian*/}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" data-id={id} onClick={props.submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
