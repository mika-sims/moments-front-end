import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CurrenUserContext = createContext();
export const SetCurrenUserContext = createContext();

export const useCurrentUser = () => useContext(CurrenUserContext);
export const useSetCurrentUser = () => useContext(SetCurrenUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);
  return (
    <CurrenUserContext.Provider value={currentUser}>
      <SetCurrenUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrenUserContext.Provider>
    </CurrenUserContext.Provider>
  );
};
