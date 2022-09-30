import {
  VStack,
  Box,
  Flex,
  Image,
  Button,
  HStack,
  Text,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Center,
} from "@chakra-ui/react";
import { MotionDiv } from "./motion";
import MadbLogo from "../../assets/logo/Ma.DB.png";
import BackgroundImage from "../../assets/background/toras.jpg";
import WorkplaceImage from "../../assets/background/workplace.png";
import HandsOnImage from "../../assets/background/hands-on.png";
import TappingHeadImage from "../../assets/background/tapping-head.jpg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Redirect, useHistory } from "react-router-dom";
import { useAuthenticationProvider } from "../../providers/Authentication";
import { AnimationOnScroll } from "react-animation-on-scroll";

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();

  const { token } = useAuthenticationProvider();

  if (token) {
    return <Redirect to="/portal" />;
  }
  return (
    <VStack bgColor={"#000"} overflowX={"hidden"}>
      <Box
        bgImage={BackgroundImage}
        bgSize={"cover"}
        bgPos={{ base: "right" }}
        h={{ base: "20em", md: "32em", lg: "36em" }}
        w={"100vw"}
        zIndex={1}
      >
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex
            mt={2}
            minW={"375px"}
            h={{ base: "60px", md: "90px" }}
            w={"100vw"}
            justifyContent={{
              base: "space-between",
              md: "space-around",
            }}
            alignItems={"center"}
            px={4}
          >
            <AnimationOnScroll initiallyVisible animateIn="animate__fadeIn">
              <Image
                src={MadbLogo}
                alt={"logo"}
                maxW={"280px"}
                sx={{
                  "@media (max-width:768px)": {
                    width: "240px",
                  },
                  "@media (max-width:425px)": { width: "150px" },
                }}
              />
            </AnimationOnScroll>

            <Button
              sx={{
                display: "none",
                "@media (max-width:768px)": {
                  display: "block",
                },
                "@media (max-width:425px)": {},
              }}
              onClick={onOpen}
              fontSize={"1.6rem"}
              bg={"transparent"}
              color={"#fff"}
            >
              <AiOutlineMenuUnfold />
            </Button>
            <HStack
              sx={{
                "@media (max-width:768px)": {
                  display: "none",
                },
              }}
              spacing={4}
            >
              <Button
                bgColor={"#ff9f1a"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                onClick={() => history.push("/empresas")}
              >
                Empresas
              </Button>
              <Button
                bgColor={"#2b2b2b"}
                color={"#fff"}
                _hover={{ filter: "brightness(2)" }}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
              <Button
                bgColor={"#2b2b2b"}
                color={"#fff"}
                _hover={{ filter: "brightness(2)" }}
                onClick={() => history.push("/cadastro")}
              >
                Cadastro
              </Button>
            </HStack>
          </Flex>
        </MotionDiv>

        {/* Hidden Menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody my={8}>
              <VStack spacing={4}>
                <Button
                  bg={"transparent"}
                  color={"#ff9f1a"}
                  onClick={() => history.push("/empresas")}
                >
                  Empresas
                </Button>
                <Button
                  bg={"transparent"}
                  color={"#000"}
                  onClick={() => history.push("/login")}
                >
                  Login
                </Button>
                <Button
                  bg={"transparent"}
                  color={"#ff9f1a"}
                  onClick={() => history.push("/cadastro")}
                >
                  Cadastro
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <HStack
          mt={{ base: "2.5rem", md: "4rem", lg: "5rem" }}
          justifyContent={"flex-end"}
          w={"90vw"}
        >
          <MotionDiv
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Karantina"}
              fontWeight={"bold"}
              fontSize={{ base: "40px", md: "80px", lg: "100px" }}
              lineHeight={{ base: "40px", md: "70px", lg: "100px" }}
              textAlign={"right"}
              color={"#ff9f1a"}
            >
              SUA EMPRESA, MAIS ACESSÍVEL
            </Text>
          </MotionDiv>
        </HStack>
      </Box>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#ff9f1a"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#fff"}
        >
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Image
              src={WorkplaceImage}
              w={{ base: "8em", md: "15em", lg: "22em" }}
              borderRadius={12}
            />
          </AnimationOnScroll>
          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"bold"}
                fontSize={{ base: "18px", md: "20px", lg: "36px" }}
                lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
              >
                Encontre empresas do setor madeireiro
              </Text>
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"400"}
                fontSize={{ base: "14px", md: "22px", lg: "30px" }}
                lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
              >
                De forma simples e prática, busque empresas da região encontre
                fornecedores
              </Text>
            </AnimationOnScroll>
          </VStack>
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#000"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#fff"}
        >
          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"bold"}
                fontSize={{ base: "18px", md: "20px", lg: "36px" }}
                lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
              >
                Promova o seu negócio de qualquer lugar
              </Text>
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"400"}
                fontSize={{ base: "14px", md: "22px", lg: "30px" }}
                lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
              >
                Tenha maior visibilidade, expondo sua empresa sem custos e para
                quem importa
              </Text>
            </AnimationOnScroll>
          </VStack>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <Image
              src={HandsOnImage}
              w={{ base: "8em", md: "15em", lg: "22em" }}
              borderRadius={12}
            />
          </AnimationOnScroll>
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#fff"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#000"}
        >
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Image
              src={TappingHeadImage}
              w={{ base: "8em", md: "15em", lg: "22em" }}
              borderRadius={12}
            />
          </AnimationOnScroll>

          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"bold"}
                fontSize={{ base: "18px", md: "20px", lg: "36px" }}
                lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
                color={"#ff9f1a"}
              >
                Uma base de dados organizada e acessível
              </Text>
              <Text
                w={{ base: "200px", md: "400px", lg: "500px" }}
                fontFamily={"Montserrat"}
                fontWeight={"400"}
                fontSize={{ base: "14px", md: "22px", lg: "30px" }}
                lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
              >
                Pondere a melhor opção para seu negócio com informações
                transparentes das empresas
              </Text>
            </AnimationOnScroll>
          </VStack>
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#000"}
        color={"#fff"}
      >
        <VStack
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          spacing={8}
        >
          <AnimationOnScroll animateIn="animate__tada">
            <Image
              src={MadbLogo}
              w={{ base: "15em", md: "18em", lg: "22em" }}
              borderRadius={12}
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <Text
              w={{ base: "90vw" }}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
              fontSize={{ base: "11px", md: "14px", lg: "16px" }}
              lineHeight={{ base: "11px", md: "14px", lg: "16px" }}
              textAlign={"center"}
            >
              Copyright©2022, MaDB. Todos os direitos reservados. Todos os
              textos, imagens, gráficos, animações, vídeos, músicas, sons e
              outros materiais são protegidos por direitos autorais e outros
              direitos de propriedade intelectual pertencentes à MaDB, suas
              subsidiárias, afiliadas e licenciantes.
            </Text>
          </AnimationOnScroll>
        </VStack>
      </Center>
    </VStack>
  );
};
export default LandingPage;
