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
      createdById: leader.id,
      members: {
        create: [
          { userId: leader.id, role: "LEADER" },
          { userId: member1.id, role: "MEMBER" },
          { userId: member2.id, role: "MEMBER" },
        ],
      },
    },
  });

  // --- PROJECT MEMBERS FETCH ---
  const projectMembers = await prisma.projectMember.findMany({
    where: { projectId: project.id },
  });

  const leaderMember = projectMembers.find((m) => m.userId === leader.id);
  const member1Member = projectMembers.find((m) => m.userId === member1.id);
  const member2Member = projectMembers.find((m) => m.userId === member2.id);

  // --- TASKS ---
  await prisma.task.createMany({
    data: [
      {
        title: "Develop Authentication System",
        description: "Set up secure user authentication using JWT and bcrypt.",
        weight: 2.5,
        status: "IN_PROGRESS",
        projectId: project.id,
        createdById: leader.id,
        assignedToId: member1.id,
      },
      {
        title: "Design Project Dashboard",
        description: "Implement frontend dashboard with React and Tailwind.",
        weight: 1.8,
        status: "PENDING",
        projectId: project.id,
        createdById: member1.id,
        assignedToId: member2.id,
      },
      {
        title: "Integrate Feedback API",
        description: "Connect the feedback module and test endpoints.",
        weight: 2.0,
        status: "COMPLETED",
        projectId: project.id,
        createdById: member2.id,
        assignedToId: leader.id,
        completionTime: 45,
        peerScore: 9.2,
        aiScore: 8.7,
      },
    ],
  });

  // --- FEEDBACK ---
  await prisma.feedback.createMany({
    data: [
      {
        fromMemberId: leaderMember.id,
        toMemberId: member1Member.id,
        projectId: project.id,
        rating: 5,
        comment: "Excellent backend structure and code clarity.",
      },
      {
        fromMemberId: member1Member.id,
        toMemberId: member2Member.id,
        projectId: project.id,
        rating: 4,
        comment: "Good UI implementation, needs polish on responsiveness.",
      },
      {
        fromMemberId: member2Member.id,
        toMemberId: leaderMember.id,
        projectId: project.id,
        rating: 5,
        comment: "Great coordination and leadership throughout the sprint.",
      },
    ],
  });

  // --- INSIGHTS ---
  await prisma.insight.createMany({
    data: [
      {
        projectId: project.id,
        content:
          "Team efficiency improved by 20% after integrating async review sessions.",
      },
      {
        projectId: project.id,
        content:
          "Frontend load times decreased by 30% after optimizing React components.",
      },
    ],
  });

  // --- MESSAGES ---
  await prisma.message.createMany({
    data: [
      {
        content: "Hey team, remember to push your commits before 5 PM.",
        senderId: leaderMember.id,
        projectId: project.id,
      },
      {
        content: "Frontend PR is ready for review.",
        senderId: member1Member.id,
        projectId: project.id,
      },
      {
        content: "Noted! I'll check and merge after testing.",
        senderId: leaderMember.id,
        projectId: project.id,
      },
    ],
  });

  // --- GITHUB DATA ---
  await prisma.gitHubData.createMany({
    data: [
      { userId: leader.id, commits: 85, pullRequests: 9, linesOfCode: 12000 },
      { userId: member1.id, commits: 64, pullRequests: 7, linesOfCode: 9500 },
      { userId: member2.id, commits: 51, pullRequests: 6, linesOfCode: 7200 },
    ],
  });

  // --- GOOGLE DOCS DATA ---
  await prisma.googleDocsData.createMany({
    data: [
      { userId: leader.id, editsCount: 320 },
      { userId: member1.id, editsCount: 290 },
      { userId: member2.id, editsCount: 180 },
    ],
  });

  console.log("✅ Database seeded successfully with foreign test data!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
