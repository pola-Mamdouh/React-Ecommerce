// Hooks
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
// Components
import Category from "@/components/eCommerce/Category/Category";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
// Async Thunk Redux
import { actGetCategories } from "@/store/categories/categoriesSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return <Category key={record.id} {...record} />;
        })
      : "There are no categories";
  return (
    <Grid container spacing={2} className="w-full mt-4">
      <Grid size={12} className="mb-4">
        <Typography level="h2">Categories</Typography>
      </Grid>
      {categoriesList}
    </Grid>
  );
};

export default Categories;
