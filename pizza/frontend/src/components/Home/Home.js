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
        {/*<p>{pizza.topping.map((topping) => topping).join(",")}</p>*/}
        <p>Price: ${pizza.price}</p>
      </div>
    </div>
  );
};

const Home = ({ pizzas }) => {
  const [keyword, setKeyword] = useState("");

  const filteredPizzas = pizzas.filter(
    (pizza) => pizza.name.toLowerCase().includes(keyword)
    // || pizza.topping.includes(keyword)
  );

  console.log(pizzas);
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
