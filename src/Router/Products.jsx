import { Link, Outlet } from "react-router-dom"

const Products = () => {
  return (
    <div>
      <h1>List of Products</h1>
      <input type="text" name="text" id="" placeholder='Search for Product' />
      <div>
        <Link to='new-product'>New Product</Link>
        <br />
        <Link to='buy-product'>Buy Product</Link>
      </div>
      <Outlet />


    </div>
  )
}

export default Products