"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

import { IDefaultProps } from "./types";

const Providers = ({ children }: IDefaultProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
