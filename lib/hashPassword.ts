import bcrypt from "bcryptjs";

let salt = bcrypt.genSaltSync(10);
export default function hashPassword(password: string): string {
  let hash = bcrypt.hashSync(password, salt);
  console.log("Password: ", password);
  console.log("Password Hashed: ", hash);
  return hash;
}
