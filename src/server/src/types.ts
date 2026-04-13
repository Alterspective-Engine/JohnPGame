import { Request } from 'express';

export interface User {
  entra_oid: string;
  email: string;
  display_name: string;
  created_at: string;
}

export interface Item {
  id: number;
  user_oid: string;
  text: string;
  created_at: string;
}

export interface AuthenticatedUser {
  oid: string;
  email: string;
  displayName: string;
}

export interface AuthRequest extends Request {
  user: AuthenticatedUser;
}
