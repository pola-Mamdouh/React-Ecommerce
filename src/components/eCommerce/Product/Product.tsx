import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Product = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
      <Card sx={{ width: '100%' }}>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <div>
          <Typography level="h3">Title</Typography>
        </div>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
              $2,900
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="md"
            color="primary"
            className="bg-main! text-white!"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            <AddShoppingCartIcon/>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
