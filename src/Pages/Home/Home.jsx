import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Slider from "../../Components/Slider/Slider";
function Home() {
  return (
    <Helmet title={"Home Page"}>
       <section className="home">
         <Slider/>
       </section>
    </Helmet>
  );
}

export default Home;
