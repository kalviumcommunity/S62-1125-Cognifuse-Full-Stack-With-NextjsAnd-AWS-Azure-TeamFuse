export type ErrorCode =
  | "VALIDATION_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMIT"
  | "GITHUB_ERROR"
  | "BAD_REQUEST"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  status: number;
  code: ErrorCode;
  details?: unknown;

  constructor(
    message: string,
    code: ErrorCode,
    status: number,
    details?: unknown
  ) {
    super(message);
    this.code = code;
    this.status = status;
    this.details = details;
  }
}
