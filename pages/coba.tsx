import React, { useState } from 'react';

export default function CobaIncrement() {
  const [price, setPrice] = useState(100);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const CounterIncrement = () => {
    setCount(count + 1);
  };
  const CounterDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      null;
    }
  };

  return (
    <div className="px-10 py-10">
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key="">
            <td className="text-center" width="10%">
              asdasd
            </td>
            <td className="text-center">item</td>
            <td width="15%" className="text-center">
              Rp. {price}
            </td>
            <td width="15%">
              <div className="flex items-center justify-center">
                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                  <button
                    onClick={CounterDecrement}
                    type="button"
                    className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                  >
                    -
                  </button>
                  <div className=" inline-block px-6 py-2.5 bg-slate-300 text-slate-800 font-medium text-xs leading-tight uppercase "> {count} </div>
                  <button
                    onClick={CounterIncrement}
                    type="button"
                    className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                  >
                    +
                  </button>
                </div>
              </div>
            </td>
            <td width="15%" className="text-center">
              Rp.
              {price * count}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// import { useState } from 'react';
// const Count = () => {
//   const [price, setPrice] = useState(0);

//   const CounterIncrement = () => {
//     setPrice(price + 1);
//   };
//   const CounterDecrement = () => {
//     if (price > 0) {
//       setPrice(price - 1);
//     } else {
//       null;
//     }
//   };
//   //   const ResetCounter = () => {
//   //     setPrice(0);
//   //   };

//   return (
//     <div>
//       <p>Count Value: {price}</p>
//       <button onClick={CounterIncrement}>Counter Increment</button>
//       <button onClick={CounterDecrement}>Counter Decrement</button>
//       {/* <button onClick={ResetCounter}>Reset</button> */}
//     </div>
//   );
// };

// export default Count;
