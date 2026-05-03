"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
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

const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const { data, error } = await authClient.signUp.email({
        ...userInfo,
        callbackURL: "/",
      });
      console.log(data, error);

      if (error) {
        throw new Error(error.message || "Signup failed");
      }

      toast.success("Account created successfully 🚀");
      router.push("/signin");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto flex items-center justify-center rounded-3xl shadow-2xl border border-gray-200 p-6">
      <Surface className="w-full min-w-95">
        <h2 className="text-3xl font-bold text-center mb-2">
          🚀 Create Account
        </h2>

        <p className="text-center mb-4 text-sm">
          Join SkillSphere and start building real-world skills today.
        </p>
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Group>
              {/* Name */}
              <TextField
                isRequired
                type="text"
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>

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

              {/* Photo Url */}
              <TextField isRequired type="url" name="image">
                <Label>Photo URL</Label>
                <Input placeholder="Enter your photo" />
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
              {/* <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description> */}
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
                {loading ? "Creating..." : "Create Account"}
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
          <Link href="/signin" className="text-indigo-400 hover:underline">
            Sign In
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default SignUpForm;
