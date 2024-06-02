import bcrypt from "bcrypt";

export default async function hashPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(1);
    const hash = await bcrypt.hash(password, salt);

    return { salt: salt, hash: hash };
  } catch (error) {
    throw new Error("Encryption Error");
  }
}
