import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  ListItem,
  Box,
  Center,
  Flex,
  VStack,
  // Button,
  Text,
  // useToast,
} from "@chakra-ui/react";
// import { useListaEmpresasProvider } from "../../providers/ListaEmpresas";
// import { useAuthenticationProvider } from "../../providers/Authentication";
import { MotionDiv } from "./motion";

const Exercise = ({ item }) => {
  // const { empresas } = useListaEmpresasProvider;
  // const { token } = useAuthenticationProvider();

  // const toast = useToast();

  return (
    <MotionDiv
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AccordionItem my={2} key={item.id}>
        <h2>
          <AccordionButton
            bgColor={"#ff9f1a"}
            _hover={{ filter: "brightness(1.1)" }}
            borderRadius={"10px"}
          >
            <Box
              fontSize={{ base: "14px", md: "20px" }}
              flex="1"
              textAlign="left"
              fontFamily={"Montserrat, sans-serif"}
            >
              {item.name} - {item.products[0].name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={"10px"} maxWidth={"900px"}>
          <VStack spacing={"10px"}>
            <Flex
              m={0}
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent={{ base: "center", lg: "flex-start" }}
              alignItems={{ base: "center", lg: "flex-start" }}
            >
              <Center w={{ base: "100%", lg: "50%" }}>
                <UnorderedList w={"90%"} spacing={2}>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Descrição: {item.description}
                  </ListItem>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Site: {item.website || "não fornecido"}
                  </ListItem>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Endereço: {item.address || "não fornecido"}
                  </ListItem>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Cidade: {item.city || "não fornecido"}
                  </ListItem>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Região: {item.region || "não fornecido"}
                  </ListItem>
                </UnorderedList>
              </Center>
              <Center w={{ base: "100%", lg: "50%" }}>
                <UnorderedList w={"90%"} spacing={2}>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    Contato: {item.contacts[0].department_responsible},
                    telefone:
                    {item.contacts[0].number || "não fornecido"}, email:{" "}
                    {item.contacts[0].email || "não fornecido"}
                  </ListItem>
                  <ListItem
                    borderRadius={"5px"}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    <Text>Equipamento: {item.equipments[0].name}</Text>
                    <Text>- {item.equipments[0].description}</Text>
                  </ListItem>
                </UnorderedList>
              </Center>
            </Flex>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </MotionDiv>
  );
};

export default Exercise;
