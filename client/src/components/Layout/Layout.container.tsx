import React from "react";
import LayoutPresenter from "./Layout.presenter";
import cookie from "js-cookie";
import Router from "next/router";

const LayoutContainer: React.FC = ({ children }: any) => {
  console.log("cookie", cookie.get(""));
  const token = cookie.get("accessToken");

  console.log("token", token);
  // if (token) {
  //   Router.push("/main");
  // }

  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default LayoutContainer;
