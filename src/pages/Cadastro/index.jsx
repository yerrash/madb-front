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
import LoginBackgroundDesktop from "../../assets/background/harvester.png";
import LoginBackgroundMobile from "../../assets/background/mobile.png";
import MadbLogo from "../../assets/logo/Ma.DB.png";
import { MotionCenter, MotionDiv } from "./motion";
import { useAuthenticationProvider } from "../../providers/Authentication";
import { Redirect } from "react-router-dom";

const Cadastro = () => {
  const history = useHistory();

  const toast = useToast();

  const { handleSignUpAuth, token } = useAuthenticationProvider();

  const signUpSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/, "Use apenas letras"),
    last_name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/, "Use apenas letras"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .max(16, "Máximo de 16 caracteres")
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  if (token) {
    return <Redirect to="/portal" />;
  }

  const handleCreateUser = (data) => {
    delete data.confirm_password;
    handleSignUpAuth(data, history, toast);
  };

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      overflow={"hidden"}
      justifyContent={"flex-end"}
      sx={{
        bgImage: LoginBackgroundDesktop,
        bgRepeat: "no-repeat",
        bgPos: "left",
        bgSize: "cover",
        "@media (max-width:768px)": {
          bgImage: LoginBackgroundMobile,
          bgPos: "left",
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

            <form onSubmit={handleSubmit(handleCreateUser)}>
              <Center flexDirection={"column"}>
                {/* INPUT NOME */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  mt={2}
                  isInvalid={errors.name}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Nome
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        textAlign={"center"}
                        variant={"unstyled"}
                        {...register("name")}
                        type="text"
                        borderBottom={
                          errors.name
                            ? "4px solid #FF530D"
                            : "4px solid #ff9f1a"
                        }
                        borderRadius={"none"}
                        placeholder={errors.name ? errors.name.message : ""}
                        _placeholder={{ color: "#FF530D" }}
                        py={2}
                      />
                      {/* </PopoverTrigger> */}
                      <PopoverContent bgColor={"#000"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt={4}>
                          {errors.name
                            ? errors.name.message
                            : "Este campo deve conter apenas letras"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                {/* INPUT SOBRENOME */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  mt={2}
                  isInvalid={errors.last_name}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Sobrenome
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        textAlign={"center"}
                        variant={"unstyled"}
                        {...register("last_name")}
                        type="text"
                        borderBottom={
                          errors.last_name
                            ? "4px solid #FF530D"
                            : "4px solid #ff9f1a"
                        }
                        borderRadius={"none"}
                        placeholder={errors.age ? errors.age.message : ""}
                        _placeholder={{ color: "#FF530D" }}
                        py={2}
                      />
                      {/* </PopoverTrigger> */}
                      <PopoverContent bgColor={"#000"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt={4}>
                          {errors.last_name
                            ? errors.last_name.message
                            : "Este campo deve conter apenas letras"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                {/* INPUT EMAIL */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  mt={2}
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
                          errors.email
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
                            : "Preencha com o seu melhor e-mail"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                {/* INPUT PASSWORD */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  mt={2}
                  isInvalid={errors.password}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Senha
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        textAlign={"center"}
                        variant={"unstyled"}
                        {...register("password")}
                        type="password"
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
                            : "Mínimo de 6 caracteres"}
                        </PopoverBody>
                        <PopoverBody mt={-4}>
                          Máximo de 16 caracteres
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                {/* INPUT CONFIRM PASSWORD */}
                <FormControl
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  my={2}
                  isInvalid={errors.email}
                >
                  <FormLabel textAlign={"center"} fontWeight={"bold"}>
                    Confirmar senha
                    <Popover autoFocus={false}>
                      {/* <PopoverTrigger> */}
                      <Input
                        maxW={"250px"}
                        textAlign={"center"}
                        variant={"unstyled"}
                        {...register("confirm_password")}
                        type="password"
                        borderBottom={
                          errors.confirm_password
                            ? "4px solid #FF530D"
                            : "4px solid #ff9f1a"
                        }
                        borderRadius={"none"}
                        placeholder={
                          errors.confirm_password
                            ? errors.confirm_password.message
                            : ""
                        }
                        _placeholder={{ color: "#FF530D" }}
                        py={2}
                      />
                      {/* </PopoverTrigger> */}
                      <PopoverContent bgColor={"#000"}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt={4}>
                          {errors.confirm_password
                            ? errors.confirm_password.message
                            : "Senhas devem ser iguais"}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </FormLabel>
                </FormControl>

                <Button
                  bgColor={"#ff9f1a"}
                  _hover={{ filter: "brightness(1.1)" }}
                  type="submit"
                  my={2}
                >
                  Cadastrar
                </Button>
              </Center>
            </form>
            <Text>
              Já possui uma?{" "}
              <Button
                onClick={() => handleNavigation("/login")}
                variant={"link"}
                color={"#ff9f1a"}
              >
                Login
              </Button>
            </Text>
          </VStack>
        </MotionDiv>
      </MotionCenter>
    </Flex>
  );
};

export default Cadastro;
