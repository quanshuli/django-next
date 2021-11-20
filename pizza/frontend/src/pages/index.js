import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import Home from "../components/Home/Home";

export default function home({ pizzas }) {
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://127.0.0.1:8000/pizza/");
  const pizzas = await res.json();
  console.log(pizzas);
  return {
    props: {
      pizzas,
    },
  };
};
