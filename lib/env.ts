export type EnvType = {
  API_BASE_URL: string;
};

const getEnvValue = (key: keyof EnvType): string => {
  return process.env[key] || "https://randomuser.me/api";
};

export const getEnv = (): EnvType => ({
  API_BASE_URL: getEnvValue("API_BASE_URL"),
});
