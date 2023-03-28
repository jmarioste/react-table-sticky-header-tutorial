import type { NextPage } from "next";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">React Table Sticky Header </h1>
      <div className="max-h-[400px] overflow-y-auto">
        <Table />
      </div>
    </div>
  );
};

export default Home;
