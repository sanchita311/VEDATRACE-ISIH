import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { verifyJwt } from './jwt';

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

// Real session extraction from JWT cookie
export async function getCurrentUser() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('vedatrace_session')?.value;
    if (!token) return null;
    const payload = verifyJwt(token);
    if (!payload || typeof payload !== 'object') return null;
    // Only return safe user info
    return {
      UserName: payload['UserName'],
      User_type: payload['User_type'],
    };
  } catch {
    return null;
  }
}
