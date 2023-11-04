import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

export default function Home() {
  const navigatorStatus = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigatorStatus.state === "loading" ? (
        <div className="w-1/2 mx-auto">
          <Hourglass
            visible={true}
            height="200"
            width="200"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
}
