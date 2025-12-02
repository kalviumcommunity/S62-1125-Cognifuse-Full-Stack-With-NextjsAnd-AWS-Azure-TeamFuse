export type ParsedCommit = {
  sha: string;
  message: string;
  url?: string;
  authorName?: string;
  authorEmail?: string;
  authoredAt?: Date;
  raw: unknown;
};

export type ParsedPullRequest = {
  number: number;
  title: string;
  authorLogin?: string;
  state: string;
  merged: boolean;
  mergedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  raw: unknown;
};

export type ParsedRepoEvent = {
  commits?: ParsedCommit[];
  pullRequests?: ParsedPullRequest[];
};
