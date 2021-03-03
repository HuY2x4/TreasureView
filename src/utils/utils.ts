// import { useState, useRef, useCallback } from 'react';

// // 带回调的hooks - useState
// export function useStateCallback(init: any) {
//   const [state, setState] = useState(init);
//   const ref = useRef(init);

//   const handler = useCallback(
//     (value, cb) => {
//       setState(value);
//       if (cb) {
//         ref.current = value;
//         cb(ref.current);
//       }
//     },
//     [setState],
//   );

//   return [state, handler];
// }
