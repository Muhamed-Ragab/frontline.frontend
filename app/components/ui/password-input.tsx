import { Input, type InputProps } from "@nextui-org/input";
import { useToggle } from "ahooks";
import { EyeFilledIcon, EyeSlashFilledIcon } from "public/icons";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

const requirements = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[^a-zA-Z0-9]/, text: "At least 1 special character" },
];

const passwordStrength = {
  0: "Enter a password",
  1: "Weak",
  2: "Weak",
  3: "Medium",
  4: "Strong",
  5: "Very strong",
};

type PasswordInputProps = InputProps & {
  showStrength?: boolean;
};

const PasswordInput = ({ showStrength, ...props }: PasswordInputProps) => {
  const { register, watch } = useFormContext();
  const [isVisible, { toggle: toggleVisibility }] = useToggle(false);

  const checkStrength = (pass: string) =>
    requirements.map(req => ({
      met: req.regex.test(pass),
      text: req.text,
    }));

  const strength = checkStrength(watch("password"));

  const getStrengthText = (score: keyof typeof passwordStrength) =>
    passwordStrength[score] || "Enter a password";

  const strengthScore = useMemo(
    () =>
      strength.filter(req => req.met).length as keyof typeof passwordStrength,
    [strength]
  );

  const afterBgColor =
    {
      0: "after:bg-red-500",
      1: "after:bg-red-500",
      2: "after:bg-red-500",
      3: "after:bg-yellow-500",
      4: "after:bg-green-500",
      5: "after:bg-green-500",
    }[strengthScore] || "after:bg-red-500";

  return (
    <div>
      <Input
        endContent={
          <button
            aria-label='toggle password visibility'
            className='focus:outline-none'
            type='button'
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
            ) : (
              <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
            )}
          </button>
        }
        id='password'
        label='Password'
        type={isVisible ? "text" : "password"}
        variant='underlined'
        className='border-b-2 border-[#9F9F9F]'
        classNames={{
          input: "placeholder:text-[#9F9F9F]",
          inputWrapper: `${afterBgColor} after:h-[3px] group-hover:after:border-white`,
        }}
        {...register("password")}
        {...props}
      />

      {showStrength && (
        <span className='text-[10px] font-normal flex justify-start mt-4'>
          Password strength : {getStrengthText(strengthScore)}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
