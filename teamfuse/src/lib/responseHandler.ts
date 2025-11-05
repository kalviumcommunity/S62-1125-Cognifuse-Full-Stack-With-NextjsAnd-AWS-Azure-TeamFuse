import { NextResponse } from "next/server";

export function sendSuccess<T>(data: T, message = "Success", status = 200) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

interface ErrorResponseDetails {
  code: string;
  details?: unknown;
}

export const sendError = (
  message = "Something went wrong",
  code = "INTERNAL_ERROR",
  status = 500,
  details?: unknown
) => {
  return NextResponse.json(
    {
      success: false,
      message,
      error: { code, details } as ErrorResponseDetails,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
};
