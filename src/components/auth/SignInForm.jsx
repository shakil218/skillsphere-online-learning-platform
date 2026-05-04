"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      const { data, error } = await authClient.signIn.email({
        ...userInfo,
        callbackURL: "/",
        rememberMe: false,
      });

      if (error) {
        throw new Error(error.message || "Signup failed");
      }

      toast.success("User sign in successfully 👋");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto flex items-center justify-center rounded-3xl shadow-2xl border border-gray-200 p-6">
      <Surface className="w-full min-w-95">
        <h2 className="text-3xl font-bold text-center mb-2">👋 Welcome Back</h2>

        <p className="text-center mb-6 text-sm">
          Sign in to continue your journey 🚀
        </p>
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Group>
              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <InputGroup>
                  <InputGroup.Input
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      isIconOnly
                      aria-label={isVisible ? "Hide password" : "Show password"}
                      size="sm"
                      variant="ghost"
                      onPress={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeSlash className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
                <FieldError />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button
                disabled={loading}
                className={`btn rounded-lg bg-black/75 text-white w-full ${
                  loading ? "bg-gray-500 cursor-not-allowed" : ""
                }`}
                type="submit"
                variant="primary"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
        <div className="pt-5">
          <Button className="w-full btn rounded-lg" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </div>
        {/* FOOTER */}
        <p className="text-center pt-0.5 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default SignInForm;
