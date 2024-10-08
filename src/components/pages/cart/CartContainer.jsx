import { useState, useEffect } from "react";
export const CartContainer = () => {
  useState();
  useEffect(() => {
    console.log("CartContainer");
  }, []); // array de dependencias para que useEffect dependa de algo
  return <div>CartContainer</div>;
};
