import React, { useState } from "react";
import Link from "next/dist/client/link";

const Pizza = ({ pizza }) => {
  //const pizza = props.pizza;
  //console.log(pizza);
  return (
    <div>
      <Link href={`/${pizza.slug}`}>
        <a>
          <img src={pizza.image} alt={pizza.name} />
        </a>
      </Link>
      <div>
        <h3>{pizza.name}</h3>
        <p>Topping:</p>
        <p>{pizza.topping.map((topping) => topping).join(",")}</p>
        <p>Price: ${pizza.price}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [keyword, setKeyword] = useState("");
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

  const filteredPizzas = pizzas.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(keyword) ||
      pizza.topping.includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <div>
      <div>
        <input placeholder="search pizza" onChange={onInputChange} />
      </div>
      <div>
        {filteredPizzas < 1 && <div>no pizza </div>}
        {filteredPizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
