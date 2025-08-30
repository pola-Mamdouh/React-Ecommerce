import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header/Header";
import Container from '@mui/material/Container';
const MainLayout = () => {
  return (
    <div className=" ">
      <Container maxWidth="xl">
        <Header />
        <div><Outlet/></div>
      </Container>

    </div>
  );
};

export default MainLayout;
