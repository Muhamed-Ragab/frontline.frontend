import { type RegisterData, registerSchema } from "@/utils/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMount } from "ahooks";
import { FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import CompanyName from "./components/CompanyName";
import CompanyWebsite from "./components/CompanyWebsite";
import Done from "./components/Done";
import Email from "./components/Email";
import EmailWrapper from "./components/EmailWrapper";
import JobDetails from "./components/JobDetails";
import Name from "./components/Name";
import Password from "./components/Password";
import VerifyEmail from "./components/VerifyEmail";
import { useHistoryStore } from "./store";
import type { Components } from "./types";

const components: Components = {
  email: <Email />,
  verifyEmail: (
    <EmailWrapper>
      <VerifyEmail />
    </EmailWrapper>
  ),
  password: <Password />,
  name: <Name />,
  companyName: <CompanyName />,
  companyWebsite: <CompanyWebsite />,
  jobDetails: <JobDetails />,
  allDone: <Done />,
};

export default function Register() {
  const [params] = useSearchParams();
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: params.get("name") || "",
      email: params.get("email") || "",
      image: params.get("image") || "",
      jobTitle: params.get("jobTitle") || "",
      country: params.get("country") || "",
      verifiedToken: params.get("verifiedToken") || "",
    },
  });
  const { value, goTo } = useHistoryStore();

  const onSubmit = (data: any) => console.log(data);

  useMount(() => {
    const verifiedToken = params.get("verifiedToken");
    if (verifiedToken) {
      goTo("password");
    }
  });

  return (
    <FormProvider {...form}>
      <form className='h-full' onSubmit={form.handleSubmit(onSubmit) as any}>
        {components[value || "email"]}
      </form>
    </FormProvider>
  );
}
