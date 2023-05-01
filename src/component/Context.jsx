import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
//   const [singin, setSignin] = useState(false);
  const [ApiData, SetApiData] = useState([]);
  const [getData, SetGetData] = useState([]);
  const [SearchApi, setSearchApi] = useState([]);

  return (
    <myContext.Provider value={{ ApiData, SetApiData,getData,SetGetData,SearchApi,setSearchApi }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;