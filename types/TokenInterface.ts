import { JwtPayload } from 'jsonwebtoken';

export interface TokenInterface extends JwtPayload {
  id: number;
  email: string;
}
