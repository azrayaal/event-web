import React from 'react';
import PriceItem from '../../cards/card-category/priceItem';

interface EventCardProps {
  id: string;
  category_name: string;
  price: number;
  quantity: number;
  key: string;
}

// const handleChange = (item, d) => {
//   const ind = categoryItem.indexOf(item);
//   const arr = categoryItem;
//   arr[ind].quantity += d;

//   if (arr[ind].quantity === 0) arr[ind].quantity = 1;
//   setCategoryItem([...arr]);
// };

export default function EventCategoryCard(props: EventCardProps) {
  const { id, category_name, price, quantity } = props;
  return (
    <div className="px-3 py-2 bg-slate-200 divide-x-2 " key={id} id={id}>
      <div className=" text-xl mb-2 ">
        <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
          <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
            <div className=" flex-1">
              <div className="ml-3 text-xs whitespace-nowrap">{category_name}</div>
              <ul className="">
                <li className="inline-block ml-3">
                  <PriceItem price={price} key={id} />
                </li>
                <li className="inline-block float-right mr-3">
                  <div className="flex items-center justify-center">
                    <div className="inline-flex focus:shadow-lg" role="group">
                      <button
                        onClick={() => handleChange(item, -1)}
                        type="button"
                        className="rounded-l-full inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 trans ition duration-150 ease-in-out"
                      >
                        -
                      </button>
                      <div className=" inline-block px-3 py-2.5 bg-slate-300 text-slate-800 font-medium text-xs leading-tight uppercase "> {quantity} </div>
                      <button
                        onClick={() => handleChange(item, 1)}
                        type="button"
                        className="  inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out rounded-r-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <h1>{item.quantity * item.price}</h1> */}
        </div>
      </div>
    </div>
  );
}
