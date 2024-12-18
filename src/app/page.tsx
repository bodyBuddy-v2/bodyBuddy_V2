"use client";
import React, { useState } from "react";

import { OptionsDetailModal } from "@components/services";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}> 모달 테스트</button>
      <OptionsDetailModal open={open} onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} />
    </div>
  );
};
export default Home;
