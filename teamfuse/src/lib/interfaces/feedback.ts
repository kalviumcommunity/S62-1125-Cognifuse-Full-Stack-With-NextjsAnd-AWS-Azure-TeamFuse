export interface FeedbackWithUsers {
  id: string;
  projectId: string;
  fromUserId: string;
  toUserId: string;
  effort: number;
  collaboration: number;
  reliability: number;
  comment: string | null;
  aiFlag: string | null;
  createdAt: Date;

  fromUser: {
    id: string;
    name: string;
  };

  toUser: {
    id: string;
    name: string;
  };
}
