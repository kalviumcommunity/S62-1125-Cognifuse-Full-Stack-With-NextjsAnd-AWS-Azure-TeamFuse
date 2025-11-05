export const ERROR_CODES = {
  VALIDATION_ERROR: "E001", // Bad input (client fault)
  NOT_FOUND: "E002", // Resource missing
  DATABASE_FAILURE: "E003", // Prisma/Postgres issue (server fault)
  INTERNAL_ERROR: "E500", // Unknown unexpected error
};
