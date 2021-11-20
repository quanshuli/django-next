import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/pizza/");
  const pizzas = await res.json();
  console.log(pizzas);
  const paths = pizzas.map((pizza) => ({
    params: { slug: `${pizza.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://127.0.0.1:8000/pizza/");
  const pizzas = await res.json();

  const pizza = pizzas.filter((pizza) => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter((pizza) => pizza.slug !== params.slug);

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas
        .sort(() => Math.random - Math.random)
        .slice(0, 2),
    },
  };
};

const slug = ({ pizza, otherPizzas }) => {
  //console.log(pizza);
  //console.log(otherPizzas);
  return (
    <div>
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div>
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <div>
        <div>
          <p>{pizza.name}</p>
          <p>{pizza.price}</p>
        </div>
        <div>
          {otherPizzas.map((pizza) => {
            //console.log(pizza);
            return (
              <div key={pizza.id}>
                <Link href={"/" + pizza.slug}>
                  <a>
                    <img src={pizza.image} />
                    <p>{pizza.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default slug;
