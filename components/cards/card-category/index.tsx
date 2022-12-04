import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { CategoryTypes } from '../../../services/data-types';
import { getDetailEvent } from '../../../services/pages';
import PriceItem from './priceItem';

// interface CategoryProps {
//   category_name: string;
//   price: number;
//   id: string;
//   // countRst: number;
//   // CounterIncrement: () => void;
//   // CounterDecrement: () => void;
// }

export default function CategoryCards() {
  // export default function CategoryCards(props: CategoryProps) {
  // const { category_name, price, id } = props;
  // const { category_name, price, id, CounterIncrement, CounterDecrement, count } = props;

  const [count, setCount] = useState(0);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState(0);
  // const [price, setPrice] = useState(1000);

  const CounterIncrement = () => {
    setCount(count + 1);
    // const dataCount = {
    //   count: count,
    //   price,
    //   total: count * price,
    // };

    // console.log('data count', dataCount);
    // localStorage.setItem('data-count', JSON.stringify(dataCount));
  };
  const CounterDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      // const dataCount = {
      //   count: count - 1,
      //   price,
      //   // total: counter,
      // };
      // const total = dataCount * price;
      // console.log('data count', dataCount);
      // localStorage.setItem('data-count', JSON.stringify(dataCount));
    } else {
      null;
    }
  };
  const { query, isReady } = useRouter();

  const getEventDetailAPI = useCallback(async (id: any) => {
    const data = await getDetailEvent(id);
    setCategory(data.data.category);

    // console.log('data card=>', data.data.category);
  }, []);

  useEffect(() => {
    getEventDetailAPI(query.id);
  }, [isReady]);

  const onSubmit = () => {
    // const dataCount = {
    //   category_name,
    //   price,
    // };
    // console.log('data count', dataCount);
    // localStorage.setItem('data-count', JSON.stringify(dataCount));
  };

  return (
    <div>
      {category.map((item: CategoryTypes) => {
        return (
          <div className="px-3 py-2 bg-slate-200 divide-x-2 " key={item._id} id={item._id}>
            <div className=" text-xl mb-2  ">
              <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
                <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
                  <div className=" flex-1">
                    <div className="ml-3 text-xs whitespace-nowrap">{item.category_name}</div>
                    <ul className="">
                      <li className="inline-block ml-3">
                        <PriceItem price={item.price} key={item._id} />
                      </li>
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
                <h1>total: {count * price}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
