import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  // PopoverTrigger,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import LoginBackgroundDesktop from "../../assets/background/patio-madeireiro.jpg";
import LoginBackgroundMobile from "../../assets/background/mobile.png";
import MadbLogo from "../../assets/logo/Ma.DB.png";

import { MotionCenter, MotionDiv } from "./motion";

import { useAuthenticationProvider } from "../../providers/Authentication";
import { Redirect } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const toast = useToast();

  const { handleLoginAuth, token } = useAuthenticationProvider();

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  if (token) {
    return <Redirect to="/portal" />;
  }

  const handleLogin = (data) => {
    handleLoginAuth(data, history, toast);
  };

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      overflow={"hidden"}
      justifyContent={"flex-start"}
      sx={{
        bgImage: LoginBackgroundDesktop,
        bgRepeat: "no-repeat",
        bgPos: "right",
        bgSize: "cover",
        "@media (max-width:768px)": {
          bgImage: LoginBackgroundMobile,
          bgPos: "right",
          bgSize: "50vh",
          bgColor: "#000",
        },
        "@media (max-width:425px)": {
          bgImage: LoginBackgroundMobile,
          bgPos: "center",
          bgColor: "#000",
        },
      }}
    >
      <MotionCenter
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "30vw" }}
        transition={{ duration: 0.25 }}
        sx={{
          h: "100vh",
          bgColor: "#000",
          "@media (max-width:1024px)": {
            minW: "375px",
            minH: "650px",
            bg: "#000",
          },
          "@media (max-width:768px)": {
            minW: "375px",
            minH: "650px",
            bg: "#000",
          },
          "@media (max-width:425px)": {
            minW: "375px",
            minH: "650px",
            width: "100vw",
            bg: "none",
          },
        }}
        color={"#fff"}
      >
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <VStack>
            <Image src={MadbLogo} />

            <form onSubmit={handleSubmit(handleLogin)}>
              <Center flexDirection={"column"}>
                {/* INPUT EMAIL */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  my={4}
                  isInvalid={errors.email}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Email
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        textAlign={"center"}
                        variant={"unstyled"}
                        {...register("email")}
                        type="email"
                        borderBottom={
                          errors.password
                            ? "4px solid #FF530D"
                            : "4px solid #ff9f1a"
                        }
                        borderRadius={"none"}
                        placeholder={errors.email ? errors.email.message : ""}
                        _placeholder={{ color: "#FF530D" }}
                        py={2}
                      />
                      {/* </PopoverTrigger> */}
                      <PopoverContent bgColor={"#000"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt={4}>
                          {errors.email
                            ? errors.email.message
                            : "Insira seu email"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                {/* INPUT SENHA */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  my={4}
                  isInvalid={errors.password}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Senha
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        textAlign={"center"}
                        {...register("password")}
                        type="password"
                        variant={"unstyled"}
                        borderBottom={
                          errors.password
                            ? "4px solid #FF530D"
                            : "4px solid #ff9f1a"
                        }
                        borderRadius={"none"}
                        placeholder={
                          errors.password ? errors.password.message : ""
                        }
                        _placeholder={{ color: "#FF530D" }}
                        py={2}
                      />
                      {/* </PopoverTrigger> */}
                      <PopoverContent bgColor={"#000"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt={4}>
                          {errors.password
                            ? errors.password.message
                            : "Insira sua senha"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>
                {/* BUTTON SUBMIT */}
                <Button
                  bgColor={"#ff9f1a"}
                  _hover={{ filter: "brightness(1.1)" }}
                  type="submit"
                  my={2}
                >
                  Login
                </Button>
              </Center>
            </form>
            <Text>
              Novo por aqui?{" "}
              <Button
                onClick={() => handleNavigation("/cadastro")}
                variant={"link"}
                color={"#ff9f1a"}
              >
                Cadastre-se
              </Button>
            </Text>
          </VStack>
        </MotionDiv>
      </MotionCenter>
    </Flex>
  );
};

export default Login;
