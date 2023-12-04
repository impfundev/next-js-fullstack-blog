"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hook";
import { setLoading } from "@/app/lib/features/loadingSlice";
import { revalidateAction } from "@/app/lib/features/revalidate";
import { useRouter } from "next/navigation";

export default function FormAuth() {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
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
      <CardContent className="overflow-hidden">
        <Tabs aria-label="Auth Page" defaultValue={0}>
          <TabList className="grid w-full grid-cols-2">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanel value={0}>
            <form onSubmit={onLogin} className="flex flex-col gap-4">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  required
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formValues.password}
                  onChange={handleChange}
                  endDecorator={
                    <Button
                      variant="plain"
                      onClick={() => setPasswordShown(!passwordShown)}
                    >
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  }
                />
              </FormControl>
              <div className="flex gap-2 justify-end">
                <Button loading={loading} type="submit">
                  Login
                </Button>
              </div>
            </form>
          </TabPanel>
          <TabPanel value={1}>
            <form onSubmit={onSignUp} className="flex flex-col gap-4">
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  required
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formValues.password}
                  onChange={handleChange}
                  endDecorator={
                    <Button
                      variant="plain"
                      onClick={() => setPasswordShown(!passwordShown)}
                    >
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  }
                />
              </FormControl>
              <div className="flex gap-2 justify-end">
                <Button loading={loading} type="submit">
                  Sign up
                </Button>
              </div>
            </form>
          </TabPanel>
        </Tabs>
      </CardContent>
    </Card>
  );
}
