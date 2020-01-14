import React from "react"

const Pizza = (props) => {
  const {id, topping, size, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian.toString()}</td>
      <td><button type="button"
          data-id={id}
          className="btn btn-primary"
          onClick={() => props.handleClick(props.pizza)}
          >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
