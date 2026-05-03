"use client";
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
import React, { useState } from "react";

const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);
    alert("Form submitted successfully!");
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
              <TextField isRequired type="text" name="image">
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
                className="btn rounded-lg bg-black/75 text-white w-full"
                type="submit"
                variant="primary"
              >
                Sign In
              </Button>
            </Fieldset.Actions>
            <Button className="w-full btn rounded-lg" variant="tertiary">
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>
          </Fieldset>
          {/* FOOTER */}
          <p className="text-center pt-0.5 text-gray-400 text-sm">
            Don’t have an account?{" "}
            <Link href="/signin" className="text-indigo-400 hover:underline">
              Sign In
            </Link>
          </p>
        </Form>
      </Surface>
    </div>
  );
};

export default SignUpForm;
