import React from "react";
import ServiceCard from "./components/ServiceCard";

const App = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ServiceCard title="Web Development" description="Build modern web apps." />
      <ServiceCard title="Graphic Design" description="Creative design solutions." />
    </div>
  );
};

export default App;


