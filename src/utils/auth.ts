import { compare, hash } from "bcryptjs";

async function hashPassword(password: string): Promise<string> {
  const hashedPassword: string = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isValid: boolean = await compare(password, hashedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
