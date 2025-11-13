import crypto from "crypto";

const ENC_KEY = Buffer.from(process.env.ENCRYPTION_KEY!, "hex"); // 32 bytes
const IV_LEN = 16;

// Encrypt text
export function encrypt(text: string) {
  const iv = crypto.randomBytes(IV_LEN);
  const cipher = crypto.createCipheriv("aes-256-gcm", ENC_KEY, iv);

  let enc = cipher.update(text, "utf8", "hex");
  enc += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");

  return iv.toString("hex") + ":" + authTag + ":" + enc;
}

// Decrypt text
export function decrypt(encrypted: string) {
  const [ivHex, tagHex, enc] = encrypted.split(":");

  const iv = Buffer.from(ivHex, "hex");
  const tag = Buffer.from(tagHex, "hex");

  const decipher = crypto.createDecipheriv("aes-256-gcm", ENC_KEY, iv);
  decipher.setAuthTag(tag);

  let dec = decipher.update(enc, "hex", "utf8");
  dec += decipher.final("utf8");

  return dec;
}
