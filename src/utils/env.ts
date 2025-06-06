export function requireEnv(varName: string): string {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
  return value;
}
