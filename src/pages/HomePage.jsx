import React from "react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import Banner from "../component/home/Banner";
import ProductZone from "../component/home/ProductZone";
import ChairZone from "../component/home/ChairZone";
import TopBrand from "../component/home/TopBrand";
import FeedBack from "../component/home/FeedBack";
import Subscribe from "../component/home/Subscribe";
import Blog from "../component/home/Blog";
import NewArrival from "../component/home/NewArrival";
import BestDeal from "../component/home/BestDeal";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductZone />
      <ChairZone />
      <NewArrival />
      <BestDeal />
      <Subscribe />
      <Blog />
      <FeedBack />
      <TopBrand />
      <Footer />
    </>
  );
};

export default HomePage;
