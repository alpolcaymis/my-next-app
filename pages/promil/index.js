"use client";
import React from "react";
import MainComponent from "../../components/MainComponent";
import FlowBanner from "@/components/FlowBanner";
import Header from "@/components/Header";
const PromilPage = () => {
  return (
    <>
      <FlowBanner />
      <Header />
      <main>
        <MainComponent />
      </main>
    </>
  );
};

export default PromilPage;
