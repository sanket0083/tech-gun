import React from "react";

const App = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
      quantity: 2,
      price: 10.99,
      options: [
        {
          color: "red",
        },
        {
          size: "large",
        },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 1,
      price: 29.99,
      options: [
        {
          color: "blue",
        },
        {
          size: "small",
        },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      quantity: 3,
      price: 5.99,
      options: [
        {
          color: "green",
        },
        {
          size: "medium",
        },
      ],
    },
  ];

  const totalPrice = items.reduce((acc, cur) => {
    const tprice = cur.price * cur.quantity;
    return acc + tprice;
  }, 0);

  return (
    <div className="App">
      <table border={1}>
        <tbody>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>

            <th>
              options
              <tr>
                <th>color</th>
                <th>Size</th>
              </tr>
            </th>

            <th>total</th>
          </tr>
          {items.map((i) => {
            return (
              <tr key={Math.random(i)}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>

                <td>
                  {i.options.map((o) => {
                    return (
                      <td key={Math.random(o)}>
                        {o.color}
                        {o.size}
                      </td>
                    );
                  })}
                </td>
                <td>{i.price * i.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={5}>totalPrice</td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
