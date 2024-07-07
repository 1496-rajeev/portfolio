import { createContext, useReducer } from "react";
import { HOME_PATH } from "../constants";

export const AppContext = createContext<string>(HOME_PATH);

// const AppReducer = (state: any, action: any) => {
//   return window.structuredClone({
//     ...state,
//     path: action.payload,
//   });
// };

// const [path, dispatch] = useReducer(AppReducer, {
//   path: HOME_PATH,
// });

// export const value = { path, dispatch };
