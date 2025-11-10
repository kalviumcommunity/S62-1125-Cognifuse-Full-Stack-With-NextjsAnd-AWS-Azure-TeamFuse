import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Shield } from "lucide-react";
import Authentication from "@/components/auth/Authentication";

export default function Auth() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl mb-4">
            <Code2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">TeamFuse</h1>
          <p className="text-slate-600 mt-2">
            Collaborate smarter with your team
          </p>
        </div>

        {/* Auth Card */}
        <Card className="shadow-lg border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription className="text-base mt-2">
              Use your GitHub account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* GitHub Sign In Button */}
            <Authentication />

            {/* Security Note */}
            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-700 font-medium">
                  Secure Authentication
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  We use GitHub OAuth for secure sign-in. Your credentials are
                  never stored.
                </p>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-slate-500">
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Don&apos;t have a GitHub account?{" "}
          <a
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Create one here
          </a>
        </p>
      </div>
    </div>
  );
}
