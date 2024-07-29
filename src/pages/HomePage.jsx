import React from "react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import Banner from "../component/home/Banner";
import ProductZone from "../component/home/ProductZone";
import ChairZone from "../component/home/ChairZone";
import TopBrand from "../component/home/TopBrand";
import FeedBack from "../component/home/FeedBack";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductZone />
      <ChairZone />
      <TopBrand />
      <FeedBack />
      <Footer />
    </>
  );
};

export default HomePage;
