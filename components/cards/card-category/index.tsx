import PriceItem from './priceItem';

interface CategoryProps {
  category_name: string;
  price: string;
  id: string;
}

export default function CategoryCards(props: CategoryProps) {
  const { category_name, price, id } = props;

  const onSubmit = () => {
    const dataCategory = {
      category_name,
      price,
    };

    console.log('data dari category card', dataCategory);
    localStorage.setItem('checkout-item', JSON.stringify(dataCategory));
    window.location.reload();
  };

  return (
    <div>
      <div className="px-3 py-2 bg-slate-200 divide-x-2 " key={id} id={id}>
        <div className=" text-xl mb-2  ">
          <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
            <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
              <div className=" flex-1">
                <div className="ml-3 text-xs whitespace-nowrap">{category_name}</div>
                <PriceItem price={price} key={id} />
              </div>
              <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-3 border  hover:border-transparent rounded-lg" type="button" onClick={onSubmit}>
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
