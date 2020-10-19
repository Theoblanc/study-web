import React from "react";
import { NaviLayout, Tab } from "./Navigation.styled";
const NavigationPresenter = () => {
  return (
    <NaviLayout>
      <Tab>알람 기능</Tab>
      <Tab>채팅 기능</Tab>
      <Tab>파일 저장</Tab>
      <Tab>지도</Tab>
      <Tab>영상</Tab>
    </NaviLayout>
  );
};

export default NavigationPresenter;
