import type { DefaultToastOptions } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalToasterOptions: DefaultToastOptions = {
    duration: 2000,
    style: {
      padding: "16px",
      minWidth: "fit-content",
      maxWidth: "unset",
      textAlign: "center",
      fontWeight: "bold",
      color: "#000",
      backgroundColor: "#fafafa",
      borderRadius: "20px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      border: "2px solid #f6f6f6",
    },
  };

  return (
    <>
      <Toaster position='bottom-right' toastOptions={globalToasterOptions} />
      {children}
    </>
  );
}
