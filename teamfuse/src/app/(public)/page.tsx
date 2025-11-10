"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Users,
  GitBranch,
  MessageSquare,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Zap,
  Code2,
  Activity,
} from "lucide-react";
import Authentication from "@/components/auth/Authentication";

export default function LandingPage() {
  const features = [
    {
      icon: GitBranch,
      title: "GitHub Integration",
      description:
        "Seamlessly sync your repositories and track commits in real-time",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with real-time chat and task management",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "AI-powered insights into your team's productivity and performance",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description:
        "Get notified about project changes and team activities instantly",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding & Features */}
        <div className="space-y-8 lg:pr-8">
          {/* Logo and Heading */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900">TeamFuse</h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">
              The ultimate collaboration platform for developers. Connect your
              GitHub, sync your projects, and supercharge your team&apos;s
              productivity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">10k+</div>
              <div className="text-sm text-slate-600 mt-1">Active Teams</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-purple-600">50k+</div>
              <div className="text-sm text-slate-600 mt-1">Projects</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-sm text-slate-600 mt-1">Uptime</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-700 italic">
                    &quot;TeamFuse transformed how our team collaborates. The
                    GitHub integration is seamless and the AI insights are
                    incredibly valuable!&quot;
                  </p>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    — Sarah Chen, Tech Lead
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Auth Card */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md shadow-2xl border-slate-200">
            <CardHeader className="text-center space-y-3 pb-8">
              <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl w-fit">
                <Github className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Welcome to TeamFuse
              </CardTitle>
              <CardDescription className="text-base">
                Sign in with your GitHub account to get started
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* GitHub Sign In Button */}
              <Authentication />

              {/* Benefits List */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <p className="text-sm font-medium text-slate-700">
                  What you&apos;ll get:
                </p>
                <div className="space-y-2">
                  {[
                    "Automatic repository syncing",
                    "Real-time team collaboration",
                    "AI-powered productivity insights",
                    "Secure authentication via GitHub",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Note */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">
                    🔒 Your data is secure.
                  </span>{" "}
                  We only access public repository information and never store
                  your GitHub credentials. Read our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Footer */}
              <div className="text-center pt-4">
                <p className="text-xs text-slate-500">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
