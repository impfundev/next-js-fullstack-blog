"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";
import { revalidateAction } from "@/app/lib/features/revalidate";
import { useRouter } from "next/navigation";

export default function FormAuth() {
  const [selected, setSelected] = useState("login");
  const handleSelected = () => {
    if (selected === "login") {
      setSelected("sign-up");
    } else {
      setSelected("login");
    }
  };

  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl: "/",
      });

      dispatch(setLoading(false));
      if (!res?.error) {
        revalidateAction("/");
        dispatch(setLoading(false));
        router.replace("/");
      } else {
        console.error("invalid email or password");
        alert("invalid email or password");
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      console.error(error);
    }
  };

  const onSignUp = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(setLoading(false));
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl: "/",
      });

      revalidateAction("/");
      dispatch(setLoading(false));
      router.replace("/");
    } catch (error: any) {
      dispatch(setLoading(false));
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Card className="max-w-full">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={handleSelected}
        >
          <Tab key="login" title="Login">
            <form onSubmit={onLogin} className="flex flex-col gap-4">
              <Input
                isRequired
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
              <Input
                isRequired
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" onPress={() => setSelected("sign-up")}>
                  Sign up
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  type="submit"
                  isLoading={loading}
                  fullWidth
                  color="primary"
                >
                  Login
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form onSubmit={onSignUp} className="flex flex-col gap-4 h-[300px]">
              <Input
                isRequired
                name="name"
                type="text"
                label="Name"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={handleChange}
              />
              <Input
                isRequired
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
              <Input
                isRequired
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="text-center text-small">
                Already have an account?{" "}
                <Link size="sm" onPress={() => setSelected("login")}>
                  Login
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  isLoading={loading}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
