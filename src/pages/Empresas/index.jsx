import api from "../../services/api";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Heading,
  HStack,
  Text,
  VStack,
  Accordion,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Background from "../../assets/empresa/serras2.jpg";
import { useAuthenticationProvider } from "../../providers/Authentication";
import Empresa from "../../components/Empresas";
import { MotionDiv } from "./motion";

const Empresas = () => {
  const { token } = useAuthenticationProvider();

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
        setarEmpresas(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  console.log(empresas);

  return (
    <VStack bgColor={"#000"} overflowX={"hidden"}>
      <VStack
        bgImage={Background}
        w={"100vw"}
        h={{ base: "16em", md: "20em", lg: "20em" }}
        bgRepeat={"no-repeat"}
        bgPos={{ base: "center", md: "right" }}
        bgSize={"cover"}
      >
        <VStack
          bgGradient={
            "linear(0deg, #000, transparent, transparent, transparent)"
          }
          h={"100%"}
          w={"100%"}
        >
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
          </MotionDiv>
          <HStack justifyContent={"flex-end"} w={"90vw"}>
            <MotionDiv
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <VStack
                alignItems={"flex-end"}
                mt={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
              >
                <Text
                  as={"h2"}
                  fontWeight={"700"}
                  fontFamily={"Karantina, cursive"}
                  textAlign={"right"}
                  w={{ base: "150px", md: "400px", lg: "600px" }}
                  alignSelf={"self-end"}
                  fontSize={{ base: "30px", md: "60px", lg: "100px" }}
                  lineHeight={{ base: "30px", md: "60px", lg: "100px" }}
                >
                  EMPRESAS
                </Text>
              </VStack>
            </MotionDiv>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        minHeight={"600px"}
        spacing={{ base: "5px", md: "5px" }}
        borderRadius={"20px"}
        w={"100vw"}
        maxWidth={{ base: " 400px", md: "600px", lg: "900px" }}
        background={"#ffffff"}
        overflow={"hidden"}
        p={"18px 0"}
      >
        <Heading
          fontWeight={"800"}
          fontFamily={"Montserrat, sans-serif"}
          fontSize={"22px"}
          lineHeight={"23px"}
        >
          Setores
        </Heading>
        <Tabs
          variant={"soft-rounded"}
          colorScheme={"orange"}
          w={{ base: "100%", md: "70%" }}
        >
          <TabList justifyContent={{ base: "center", md: "space-around" }}>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              // onClick={() => setFilteredList(empresas)}
            >
              Todos
            </Tab>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              // onClick={() => handleRender("serrada")}
            >
              Madeira serrada
            </Tab>

            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              // onClick={() => handleRender("tratada")}
            >
              Tratamento
            </Tab>
          </TabList>
        </Tabs>
        <Accordion allowToggle w={"80%"}>
          {empresas.map((item, index) => (
            <Empresa key={index} item={item} />
          ))}
          {/* {isRender
            ? fullList.map((item, index) => (
                <Empresa
                  key={index}
                  item={item}
                />
              ))
            : filteredList.map((item, index) => (
                <Empresa
                  key={index}
                  item={item}
                />
              ))} */}
        </Accordion>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Empresas;
