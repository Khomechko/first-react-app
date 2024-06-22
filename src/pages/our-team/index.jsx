import React from "react";
import "./style.scss";
import { UserList } from "../../components/user-list";
import { HelloBanner } from "../../components/hello-banner";
import { Header } from "../../components/header";

export function OurTeam() {
  return (
    <>
      <Header />
      <HelloBanner />
      <UserList />
    </>
  );
}
