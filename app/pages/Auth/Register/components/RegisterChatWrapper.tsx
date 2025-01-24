import Answer from "@/components/Shapes/Answer";
import Question from "@/components/Shapes/Question";
import { useEventListener } from "ahooks";
import { useFormContext } from "react-hook-form";
import { useHistoryStore } from "../store";

export default function RegisterChatWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { watch } = useFormContext();
  const { goToNext, goToPrevious, value } = useHistoryStore();
  const name = watch("name");
  const company = watch("company");
  const website = watch("companyUrl");

  useEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToNext();
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevious();
    }
  });

  return (
    <div className='flex justify-between h-full'>
      <section className='flex justify-center items-center w-5/12'>
        {children}
      </section>
      <section className='w-7/12 flex justify-start flex-col h-full mt-8'>
        {value !== "companyWebsite" && (
          <>
            <Question
              textColor='foreground'
              text='What&rsquo;s Your Full name?'
            />
            <Answer textColor='foreground' text={name || "Typing....."} />
          </>
        )}
        {(value === "companyName" || value === "companyWebsite") && (
          <>
            {value !== "companyWebsite" ? (
              <Question
                textColor='foreground'
                text={`Hello ${name}!, What is your company name?`}
              />
            ) : (
              <div />
            )}

            <Answer
              textColor='foreground'
              text={company || "Typing....."}
              maxLength={12}
            />
          </>
        )}
        {value === "companyWebsite" && (
          <>
            <Question
              textColor='foreground'
              text='That’s Cool ! , Can you show me an URL?'
            />
            <Answer
              textColor='foreground'
              text={website ? `https://${website}` : "Typing....."}
            />
          </>
        )}
      </section>
    </div>
  );
}
