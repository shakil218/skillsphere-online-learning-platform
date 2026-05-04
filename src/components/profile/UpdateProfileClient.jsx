"use client";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loading from "@/app/loading";

const UpdateProfileClient = () => {
  const [loading, setLoading] = useState(false);

  const { data: session ,isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const { data, error } = await authClient.updateUser({
        ...userInfo,
      });

      if (error) {
        throw new Error(error.message || "Update failed");
      }

      toast.success("Account Update successfully 👋");
      router.push("/profile");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="max-w-md mx-auto flex items-center justify-center rounded-3xl shadow-2xl border border-gray-200 p-6">
      <Surface className="w-full min-w-95">
        <h2 className="text-3xl font-bold text-center mb-2">
          ✏️ Update Your Account
        </h2>

        <p className="text-center mb-4 text-sm">
          Update your profile details to keep your account fresh and represent
          yourself the way you want.
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
                <Input placeholder={user?.name} />
                <FieldError />
              </TextField>

              {/* Photo Url */}
              <TextField isRequired type="url" name="image">
                <Label>Photo URL</Label>
                <Input placeholder={user?.image} />
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
                {loading ? "Updating..." : "Update Profile"}
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
};

export default UpdateProfileClient;
