import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
interface IProps {
  title: string;
  prefix: string;
  img: string;
}
const Category = ({ title, prefix, img }: IProps) => {
  return (
    <Grid size={{ xs: 6, sm: 6, md: 4 }}>
      <Link
        to={`/categories/products/${prefix}`}
        className=" flex flex-col justify-center items-center gap-1 cursor-pointer sm:w-full"
      >
        <Avatar
          alt={title}
          src={img}
          className="sm:w-[200px]! sm:h-[200px]! w-[150px]! h-[150px]!"
        />
        <Typography variant="h6">{title}</Typography>
      </Link>
    </Grid>
  );
};

export default Category;
