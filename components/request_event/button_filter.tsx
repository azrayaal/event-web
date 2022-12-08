// import React from 'react';

// interface buttonProps {
//   onClick: () => void;
// }

// export default function ButtonFilterRequest(props: buttonProps) {
//   const { onClick } = props;
//   return (
//     <div className="text-center justify-center items-center py-5">
//       <div className="inline-flex rounded-lg">
//         <button
//           onClick={onClick}
//           className="border-primary bg-primary hover:bg-primary hover:border-primary inline-flex items-center justify-center rounded-l-lg border py-[10px] px-[12px] text-center text-base font-semibold text-white transition-all hover:text-white sm:py-3 sm:px-6 bg-slate-700 hover:bg-green-400 active:bg-green-400"
//         >
//           Accept
//         </button>
//         <button
//           onClick={onClick}
//           className="border-light hover:bg-primary hover:border-primary inline-flex items-center justify-center border-y py-[10px] px-[12px] text-center text-sm font-semibold text-white transition-all sm:py-3 sm:px-6 sm:text-base bg-slate-700 hover:bg-yellow-400 active:bg-yellow-400"
//         >
//           Pending
//         </button>
//         <button
//           onClick={onClick}
//           className="border-light hover:bg-primary hover:border-primary inline-flex items-center justify-center rounded-r-lg border py-[10px] px-[12px] text-center text-sm font-semibold text-white transition-all sm:py-3 sm:px-6 sm:text-base bg-slate-700 hover:bg-red-600 active:bg-red-600"
//         >
//           Decline
//         </button>
//       </div>
//     </div>
//   );
// }

import cx from 'classnames';

interface buttonProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function ButtonFilterRequest(props: buttonProps) {
  const { title, active, onClick } = props;
  const btnClass = cx({
    'inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out':
      true,
    'btn-active': active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
