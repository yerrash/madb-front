import { Button, Center, Image, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import MadbLogo from "../../assets/logo/Ma.DB.png";

const Footer = () => {
  const history = useHistory();
  return (
    <Center
      w={"100%"}
      mt={8}
      minH={"300px"}
      h={"10rem"}
      pt={"100px"}
      justifyContent={"space-around"}
      flexDir={"column"}
      bgColor={"#000"}
    >
      <Image alt="logo" src={MadbLogo} />
      <Center
        w={{ base: "100vw", md: "50vw" }}
        justifyContent={{ base: "space-around", md: "50vw" }}
        flexDir={{ base: "column", md: "row" }}
        color={"#fff"}
        h={"300px"}
      >
        <Button variant={"link"} onClick={() => history.push("/portal")}>
          Portal
        </Button>
        <Button variant={"link"} onClick={() => history.push("/empresas")}>
          Empresas
        </Button>
        <Button variant={"link"} onClick={() => history.push("/portal")}>
          Perfil
        </Button>
        <Button variant={"link"} onClick={() => history.push("/portal")}>
          Opções
        </Button>
        <Button variant={"link"} onClick={() => history.push("/portal")}>
          Time
        </Button>
      </Center>
      <Text
        w={{ base: "90vw" }}
        fontFamily={"Montserrat"}
        fontWeight={"400"}
        fontSize={{ base: "8px", md: "14px", lg: "16px" }}
        lineHeight={{ base: "8px", md: "14px", lg: "16px" }}
        textAlign={"center"}
        color={"#fff"}
        h={"200px"}
      >
        Copyright©2022, MaDB. Todos os direitos reservados. Todos os textos,
        imagens, gráficos, animações, vídeos, músicas, sons e outros materiais
        são protegidos por direitos autorais e outros direitos de propriedade
        intelectual pertencentes à MaDB, suas subsidiárias, afiliadas e
        licenciantes.
      </Text>
    </Center>
  );
};
export default Footer;
