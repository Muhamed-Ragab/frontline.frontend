import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  company: z.string().min(3),
  jobTitle: z.string().min(3),
  department: z.string().min(3),
  image: z.string().url(),
  companyUrl: z.string().url(),
  country: z.string().min(3),
  verifiedToken: z.string().optional(),
  verificationToken: z.string().optional(),
});
export type RegisterData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type LoginData = z.infer<typeof loginSchema>;

export const sendEmailCodeSchema = z.object({
  email: z.string().email(),
});
export type SendEmailCodeSchema = z.infer<typeof sendEmailCodeSchema>;

export const verifyEmailCodeSchema = z.object({
  email: z.string().email(),
  code: z.number().min(6),
  verificationToken: z.string(),
});
export type VerifyEmailCodeSchema = z.infer<typeof verifyEmailCodeSchema>;

export const refreshSchema = z.object({
  refreshToken: z.string(),
});
export type RefreshSchema = z.infer<typeof refreshSchema>;

export const logoutSchema = z.object({
  accessToken: z.string(),
});
export type LogoutSchema = z.infer<typeof logoutSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const verifyForgotTokenSchema = z.object({
  email: z.string().email(),
  code: z.number().min(6),
  forgotToken: z.string(),
});
export type VerifyForgotTokenSchema = z.infer<typeof verifyForgotTokenSchema>;

export const resetPasswordSchema = z.object({
  resetToken: z.string(),
  password: z.string().min(6),
});
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
