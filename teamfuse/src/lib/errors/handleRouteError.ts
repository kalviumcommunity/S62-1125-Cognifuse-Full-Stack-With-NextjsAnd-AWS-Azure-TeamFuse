import { AppError } from "./AppError";
import { sendError } from "../responseHandler"; // adjust path if needed
import { ZodError } from "zod";

// Detect axios-like errors (response object)
function isAxiosError(err: unknown): err is {
  response: { status: number; data: unknown };
} {
  if (typeof err === "object" && err !== null && "response" in err) {
    const maybeResp = (err as Record<string, unknown>).response;

    if (
      typeof maybeResp === "object" &&
      maybeResp !== null &&
      "status" in maybeResp &&
      typeof (maybeResp as Record<string, unknown>).status === "number"
    ) {
      return true;
    }
  }

  return false;
}

// Detect native fetch Response errors (status + statusText)
function isFetchResponse(err: unknown): err is Response {
  return err instanceof Response;
}

export function handleRouteError(err: unknown) {
  console.error("Route Error:", err);

  // Custom AppError (your own typed backend errors)
  if (err instanceof AppError) {
    return sendError(err.message, err.code, err.status, err.details ?? null);
  }

  // Zod validation error
  if (err instanceof ZodError) {
    return sendError("Invalid input data", "VALIDATION_ERROR", 422, err.issues);
  }

  // Axios-like GitHub API error
  if (isAxiosError(err)) {
    return sendError("GitHub API error", "GITHUB_ERROR", 502, {
      status: err.response.status,
      data: err.response.data,
    });
  }

  // Native fetch() Response error
  if (isFetchResponse(err)) {
    return sendError("External API error", "EXTERNAL_API_ERROR", err.status, {
      statusText: err.statusText,
    });
  }

  // Unexpected internal error
  return sendError("Something went wrong", "INTERNAL_ERROR", 500, null);
}
