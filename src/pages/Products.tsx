import Product from "@/components/eCommerce/Product/Product"
import Grid from "@mui/material/Grid"

const Products = () => {
  return (
    <Grid container spacing={2} className="mt-10">

    <Product />
    <Product />
    <Product />
    <Product />
    </Grid>
  )
}

export default Products