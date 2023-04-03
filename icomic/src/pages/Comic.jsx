import React from "react";
import Marvel from "../Marvel";
import Card from "../components/card";
export default function Comic({ data }) {
  return (
    <div className="grid-1 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
    <Marvel>
      <Card/>
    </Marvel>
    </div>
  );
}
