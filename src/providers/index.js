import { AuthenticationProvider } from "./Authentication";
// import { ListaEmpresasProvider } from "./ListaEmpresas";

const Providers = ({ children }) => {
  return (
    <AuthenticationProvider>
      {children}
      {/* <ListaEmpresasProvider></ListaEmpresasProvider> */}
    </AuthenticationProvider>
  );
};
export default Providers;
