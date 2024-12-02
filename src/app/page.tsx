"use client";

import React from "react";

import useGetTrainerList from "./hooks/useTrainerList";

const Home = () => {
  const { data } = useGetTrainerList({});

  return <div>zz</div>;
};
export default Home;
