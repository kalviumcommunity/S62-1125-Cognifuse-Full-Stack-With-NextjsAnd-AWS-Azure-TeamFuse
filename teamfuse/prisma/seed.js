import { PrismaClient } from "../src/generated/prisma/index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Prisma seed...");

  // --- USERS ---
  const leader = await prisma.user.create({
    data: {
      name: "Luca Moretti",
      email: "luca.moretti@teamfuse.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      oauthId: "github_1",
    },
  });

  const member1 = await prisma.user.create({
    data: {
      name: "Sofia Delgado",
      email: "sofia.delgado@teamfuse.com",
      avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
      oauthId: "github_2",
    },
  });

  const member2 = await prisma.user.create({
    data: {
      name: "Akira Tanaka",
      email: "akira.tanaka@teamfuse.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg",
      oauthId: "github_3",
    },
  });

  // --- PROJECT ---
  const project = await prisma.project.create({
    data: {
      name: "Global Collaboration Platform",
      description:
        "A platform to manage remote engineering teams, feedback cycles, and project analytics.",
      githubRepo: "https:github.com/someone/repo",
      createdById: leader.id,
      members: {
        create: [
          { userId: leader.id, role: "LEADER", status: "ACCEPTED" },
          { userId: member1.id, role: "MEMBER", status: "ACCEPTED" },
          { userId: member2.id, role: "MEMBER", status: "ACCEPTED" },
        ],
      },
    },
  });

  // --- TASKS ---
  await prisma.task.createMany({
    data: [
      {
        title: "Develop Authentication System",
        description: "Set up secure user authentication using JWT and bcrypt.",
        weight: 2.5,
        status: "IN_PROGRESS",
        projectId: project.id,
        assigneeId: member1.id,
      },
      {
        title: "Design Project Dashboard",
        description: "Implement frontend dashboard with React and Tailwind.",
        weight: 1.8,
        status: "PENDING",
        projectId: project.id,
        assigneeId: member2.id,
      },
      {
        title: "Integrate Feedback API",
        description: "Connect the feedback module and test endpoints.",
        weight: 2.0,
        status: "COMPLETED",
        projectId: project.id,
        assigneeId: leader.id,
      },
    ],
  });

  // --- FEEDBACK ---
  await prisma.feedback.createMany({
    data: [
      {
        fromUserId: leader.id,
        toUserId: member1.id,
        projectId: project.id,
        effort: 5,
        collaboration: 5,
        reliability: 5,
        comment: "Excellent backend structure and code clarity.",
      },
      {
        fromUserId: member1.id,
        toUserId: member2.id,
        projectId: project.id,
        effort: 4,
        collaboration: 4,
        reliability: 4,
        comment: "Good UI implementation, needs polish on responsiveness.",
      },
      {
        fromUserId: member2.id,
        toUserId: leader.id,
        projectId: project.id,
        effort: 5,
        collaboration: 5,
        reliability: 5,
        comment: "Great coordination and leadership throughout the sprint.",
      },
    ],
  });

  // --- INSIGHTS ---
  await prisma.insight.createMany({
    data: [
      {
        projectId: project.id,
        type: "weekly",
        summary:
          "Team efficiency improved by 20% after integrating async review sessions.",
        metrics: { improvement: "20%", focus: "review sessions" },
      },
      {
        projectId: project.id,
        type: "github",
        summary:
          "Frontend load times decreased by 30% after optimizing React components.",
        metrics: { improvement: "30%", focus: "React optimization" },
      },
    ],
  });

  // --- MESSAGES ---
  await prisma.chatMessage.createMany({
    data: [
      {
        message: "Hey team, remember to push your commits before 5 PM.",
        senderId: leader.id,
        projectId: project.id,
      },
      {
        message: "Frontend PR is ready for review.",
        senderId: member1.id,
        projectId: project.id,
      },
      {
        message: "Noted! I'll check and merge after testing.",
        senderId: leader.id,
        projectId: project.id,
      },
    ],
  });

  // --- GITHUB ACTIVITY ---
  await prisma.gitHubActivity.createMany({
    data: [
      {
        userId: leader.id,
        projectId: project.id,
        commitCount: 85,
        prCount: 9,
        linesAdded: 12000,
        linesDeleted: 500,
        weekStart: new Date(),
      },
      {
        userId: member1.id,
        projectId: project.id,
        commitCount: 64,
        prCount: 7,
        linesAdded: 9500,
        linesDeleted: 300,
        weekStart: new Date(),
      },
      {
        userId: member2.id,
        projectId: project.id,
        commitCount: 51,
        prCount: 6,
        linesAdded: 7200,
        linesDeleted: 200,
        weekStart: new Date(),
      },
    ],
  });

  // --- GOOGLE DOCS DATA ---
  await prisma.googleDocsData.createMany({
    data: [
      { userId: leader.id, editsCount: 320, lastActivity: new Date() },
      { userId: member1.id, editsCount: 290, lastActivity: new Date() },
      { userId: member2.id, editsCount: 180, lastActivity: new Date() },
    ],
  });

  console.log("✅ Database seeded successfully with test data!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
