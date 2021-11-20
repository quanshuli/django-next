import React from "react";
import Head from "next/head";
import Link from "next/link";
export const getStaticPaths = async () => {
  const pizzas = [
    {
      id: 1,
      name: "cheese pizza 1",
      slug: "cheese-pizza-1",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 2,
      name: "fetta pizza 2",
      slug: "cheese-pizza-2",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 3,
      name: "meat pizza 3",
      slug: "cheese-pizza-3",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 4,
      name: "cheese pizza 4",
      slug: "cheese-pizza-4",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
  ];
  const paths = pizzas.map((pizza) => ({
    params: { slug: `${pizza.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pizzas = [
    {
      id: 1,
      name: "cheese pizza 1",
      slug: "cheese-pizza-1",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 2,
      name: "fetta pizza 2",
      slug: "cheese-pizza-2",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 3,
      name: "meat pizza 3",
      slug: "cheese-pizza-3",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
    {
      id: 4,
      name: "cheese pizza 4",
      slug: "cheese-pizza-4",
      topping: ["a", "b"],
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
      price: 10,
    },
  ];

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
