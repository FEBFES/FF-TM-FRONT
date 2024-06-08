export interface IMember {
  displayName: string | null;
  email: string | null;
  firstName: string | null;
  id: number | null;
  lastName: string | null;
  userPic: string | null;
  username: string | null;
  roleOnProject: IMemberRole;
}

export type IMemberRole = 'MEMBER' | 'MEMBER_PLUS' | 'OWNER';
