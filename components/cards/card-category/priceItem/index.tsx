import React from 'react';

interface PriceItemProps {
  price: string;
}

export default function PriceItem(props: PriceItemProps) {
  const { price } = props;
  return (
    <div>
      <div className="ml-3 whitespace-nowrap">
        <div>Rp. {price}</div>
      </div>
    </div>
  );
}
