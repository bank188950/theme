"use client";
import { Button } from "flowbite-react";
import LoginProvider from "./LoginProvider";

export default function Home() {
  return (
    <LoginProvider>
      <Button color="info">Hello</Button>
      <Button color="primary">Hello</Button>
      <Button color="box">Hello</Button>
      <Button
        color="violet"
        onClick={() => {
          alert("dfdfdf");
        }}
      >
        Hello
      </Button>
    </LoginProvider>
  );
}
