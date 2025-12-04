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
  TrendingUp,
  Zap,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import Authentication from "@/components/auth/Authentication";
import { Suspense } from "react";

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
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f111a] via-[#141620] to-[#1a1c25] text-white">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="relative w-full max-w-7xl grid lg:grid-cols-2 gap-12 p-8 z-10">
        {/* LEFT SECTION */}
        <div className="space-y-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TeamFuse
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-md">
            The ultimate collaboration platform for developers. Connect your
            GitHub, sync your projects, and supercharge your team&apos;s
            productivity — all in one place.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                value: "10k+",
                label: "Active Teams",
                color: "text-indigo-400",
              },
              { value: "50k+", label: "Projects", color: "text-purple-400" },
              { value: "99%", label: "Uptime", color: "text-pink-400" },
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4 shadow-md hover:shadow-indigo-500/20 transition"
              >
                <div className={`text-3xl font-bold ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-start gap-3"
                >
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl text-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm italic">
                    &quot;TeamFuse transformed how our team collaborates. The
                    GitHub integration is seamless and the AI insights are
                    incredibly valuable!&quot;
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">
                    — Sarah Chen, Tech Lead
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SECTION - AUTH CARD */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl shadow-indigo-500/20">
            <CardHeader className="text-center space-y-3 pb-8">
              <div className="mx-auto p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl w-fit shadow-lg shadow-indigo-400/30">
                <Github className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                Welcome to TeamFuse
              </CardTitle>
              <CardDescription className="text-base text-gray-400">
                Sign in with your GitHub account to get started
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Suspense fallback={<div>Loading...</div>}>
                <Authentication />
              </Suspense>

              {/* Benefits List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-gray-300">
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
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Note */}
              <div className="rounded-lg p-4 border border-white/10 bg-white/5 text-gray-400 text-xs">
                <p>
                  <span className="font-medium text-gray-300">
                    🔒 Your data is secure.
                  </span>{" "}
                  We only access public repository information and never store
                  your GitHub credentials.{" "}
                  <a href="#" className="text-indigo-400 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Footer */}
              <div className="text-center pt-4 text-xs text-gray-500">
                By signing in, you agree to our{" "}
                <a href="#" className="text-indigo-400 hover:underline">
                  Terms of Service
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
