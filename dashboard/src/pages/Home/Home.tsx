import { Suspense } from "react";
import Loader from "/src/UI/Loader/Loader.tsx";
import Items from "./Items/Items.tsx";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Items />
    </Suspense>
  );
};

export default Home;
