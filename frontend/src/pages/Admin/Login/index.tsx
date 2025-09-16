import { useState } from "react";
import { useNavigate } from "react-router";
import { tv } from "tailwind-variants";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

import { AdminService } from "../../../services/adminService";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

interface IFieldsProps {
  username: string;
  password: string;
}

const AdminLoginStyles = tv({
  slots: {
    containerMain:
      "flex justify-center items-center min-w-full min-h-screen px-4 lg:px-8 xl:px-12 bg-background",
    containerLogin:
      "flex flex-col justify-center items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/4 h-full",
    containerForm: "flex flex-col justify-center items-center gap-y-4 w-full",
    title:
      "text-3xl font-inter text-center font-black text-foreground uppercase",
    description: "mb-8 text-md text-center font-inter text-foreground/75",
    buttonIcon: "absolute right-4",
  },
});

const {
  containerMain,
  containerLogin,
  containerForm,
  title,
  description,
  buttonIcon,
} = AdminLoginStyles();

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fields, setFields] = useState<IFieldsProps>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(fields);

  const typeInputPassword = showPassword ? "text" : "password";

  const onSubmit = async () => {
    const params = {
      username: fields.username,
      password: fields.password,
    };

    console.log(params);

    const response = await AdminService.login(params);

    console.log(response);

    if (response.status === 200) navigate("/admin/dashboard");
  };

  return (
    <main className={containerMain()}>
      <section className={containerLogin()}>
        <h1 className={title()}>Welcome back!</h1>
        <p className={description()}>Log in to access the features.</p>

        <form
          className={containerForm()}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Input
            type="text"
            id="username"
            placeholder="Usuário"
            autoComplete="off"
            onChange={(e) => {
              setFields({ ...fields, username: e.target.value });
            }}
          />

          <div className="flex w-full items-center gap-x-2">
            <Input
              type={typeInputPassword}
              id="password"
              placeholder="Senha"
              autoComplete="off"
              onChange={(e) => {
                setFields({ ...fields, password: e.target.value });
              }}
            />

            <Button
              variant={"secondary"}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>

          <Button
            variant={"default"}
            size={"lg"}
            className="relative w-full cursor-pointer"
            type="submit"
          >
            Login
            <ArrowRight className={buttonIcon()} />
          </Button>
        </form>
      </section>
    </main>
  );
}
