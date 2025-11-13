/*
  Warnings:

  - Made the column `githubRepo` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "githubRepo" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserOAuth" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "accessTokenEnc" TEXT NOT NULL,
    "tokenExpiresAt" TIMESTAMP(3),
    "scopes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOAuth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserOAuth_userId_idx" ON "UserOAuth"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOAuth_provider_providerUserId_key" ON "UserOAuth"("provider", "providerUserId");

-- AddForeignKey
ALTER TABLE "UserOAuth" ADD CONSTRAINT "UserOAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
