import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { CategoryTypes } from '../../../services/data-types';
import { getDetailEvent } from '../../../services/pages';
import PriceItem from './priceItem';

export default function CategoryCards() {
  // const {  category_name, price, id, count } = props;

  // const { query, isReady } = useRouter();
  // const [categoryItem, setCategoryItem] = useState([]);
  // const [cart, setCart] = useState([]);

  const [count, setCount] = useState(0);

  // const [total, setTotal] = useState(0);
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

  // const detailCategoryAPI = useCallback(async (id: any) => {
  //   const data = await getDetailEvent(id);
  //   const dataCategory = data.data;
  //   console.log('data category', dataCategory.category);
  //   setCart(dataCategory);
  // }, []);

  // useEffect(() => {
  //   detailCategoryAPI(query.id);
  // }, [isReady]);

  // const onSubmit = () => {};

  return (
    <div>
      {/* {categoryItem.map((item: CategoryTypes) => { */}
      {/* return ( */}
      {/* <div className="px-3 py-2 bg-slate-200 divide-x-2 " key={item._id} id={item._id}> */}
      <div className="px-3 py-2 bg-slate-200 divide-x-2 ">
        <div className=" text-xl mb-2 ">
          <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
            <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
              <div className=" flex-1">
                {/* <div className="ml-3 text-xs whitespace-nowrap">{item.category_name}</div> */}
                <ul className="">
                  <li className="inline-block ml-3">{/* <PriceItem price={item.price} key={item._id} /> */}</li>
                  <li className="inline-block float-right mr-3">
                    <div className="flex items-center justify-center">
                      <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                        <button
                          onClick={CounterDecrement}
                          type="button"
                          className="rounded-l inline-block px-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                        >
                          -
                        </button>
                        <div className=" inline-block px-3 py-2.5 bg-slate-300 text-slate-800 font-medium text-xs leading-tight uppercase "> {count} </div>
                        <button
                          onClick={CounterIncrement}
                          type="button"
                          className=" rounded-r inline-block px-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <h1>{price * count}</h1> */}
          </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
      {/* <div className="px-3 py-2 bg-slate-200 divide-x-2 " />
      <div className="px-3 py-4 ">
        <div className="font-semibold text-md ">Total:</div>
        <div className="grid-cols-2 grid"> */}
      {/* <div className="font-bold text-xl mb-2 text-yellow-500 mt-2">RP. {categoryItem.price * count}</div> */}
      {/* <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
            <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Chekout</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
