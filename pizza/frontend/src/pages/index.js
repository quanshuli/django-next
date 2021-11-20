import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import Home from "../components/Home/Home";

export default function home() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
