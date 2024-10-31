"use client";

import PopUpBody from "@/components/CustomPopUp/Body";
import PopUpWrapper from "@/components/CustomPopUp/Wrapper";
import { UserContext, UserContextType } from "@/contexts/Usercontext";
import { WorkspaceContext, WorkspaceContextType } from "@/contexts/WorkspaceContext";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

type WorkspaceLayoutProps = {
  params: {
    tag: string;
    item: string;
  };
};

export default function WorkspaceLayout({ params }: WorkspaceLayoutProps) {
  const { createWorkspace, setWorkspaces, addUserToWorkspace } = useContext(
    WorkspaceContext
  ) as WorkspaceContextType;
  const { token, setToken, validateToken } = useContext(
    UserContext
  ) as UserContextType;
  const [name, setName] = useState("");
  const router = useRouter();

  const handleChange = (value: string) => {
    setName(value);
  };

  useEffect(() => {
    if (localStorage["token"]) {
      setToken(localStorage["token"]);
    }
  }, []);

  useEffect(() => {
    if (token) {
      validateToken(token);
    }
  }, [token]);

  const handleSumbit = async () => {
    try {
      await createWorkspace(token, { name: name });
      router.replace("/workspace/home");
    } catch (error: unknown) {
      console.error("Failed to create workspace", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-secondaryBG text-foreground max-h-screen flex-col overflow-hidden">
      <PopUpWrapper classNames="flex bg-foreground w-[400px] h-[250px] ">
        <PopUpBody classNames="flex flex-col items-center">
          <div className="my-5 text-center font-2xl font-semibold text-black">
            Welcome To HoriKanban! Let's create your first workspace!
          </div>
          <Input
            isRequired
            label="Name"
            placeholder="Name your workspace..."
            className="w-[60%] mb-5"
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button color="primary" onPress={handleSumbit}>
            Submit
          </Button>
        </PopUpBody>
      </PopUpWrapper>
    </div>
  );
}
