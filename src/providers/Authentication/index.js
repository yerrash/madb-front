import api from "../../services/api";
import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:MaDB")) || ""
  );

  const handleSignUpAuth = async (data, history, toast) => {
    await api
      .post("/users/", data)
      .then((res) => {
        console.log(data);
        toast({
          title: "Usuário cadastrado com sucesso!",
          status: "success",
        });
        history.push("/login");
      })
      .catch((err) =>
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        })
      );
  };

  const handleLoginAuth = async (data, history, toast) => {
    await api
      .post("/login/", data)
      .then((res) => {
        const accessToken = res.data.token;
        setToken(accessToken);
        localStorage.setItem("@token:MaDB", JSON.stringify(accessToken));

        toast({
          title: "Usuário logado com sucesso!",
          status: "success",
        });
        history.push("/portal");
      })
      .catch((err) => {
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        });
      });
  };

  const handleLogout = (history) => {
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        handleLoginAuth,
        handleLogout,
        handleSignUpAuth,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = () =>
  useContext(AuthenticationContext);
