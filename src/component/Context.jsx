import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
//   const [singin, setSignin] = useState(false);
  const [ApiData, SetApiData] = useState([]);
  const [getData, SetGetData] = useState([]);
  const [SearchApi, setSearchApi] = useState([]);
  const [Email,SetEmail]=useState('')
  const [Password,SetPassword]=useState('')
  const [login, setlogin] = useState(true);
  

  return (
    <myContext.Provider value={{ login, setlogin,Email,SetEmail,Password,SetPassword,ApiData, SetApiData,getData,SetGetData,SearchApi,setSearchApi }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;