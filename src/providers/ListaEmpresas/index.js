import api from "../../services/api";
import { createContext, useContext, useEffect, useState } from "react";

const ListaEmpresasContext = createContext();

export const ListaEmpresasProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@token:MaDB")) || "";

  const [empresas, setarEmpresas] = useState([]);

  useEffect(() => {
    CarregaLista();
  }, []);

  const CarregaLista = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .get("/companies", options)
      .then((res) => {
        setarEmpresas(res.data);
      })
      .catch((err) => console.log(err));
  };

  //   console.log(empresas);
  //   console.log(empresas.results);

  return (
    <ListaEmpresasContext.Provider value={{ empresas, setarEmpresas }}>
      {children}
    </ListaEmpresasContext.Provider>
  );
};

export const useListaEmpresasProvider = () => useContext(ListaEmpresasContext);
