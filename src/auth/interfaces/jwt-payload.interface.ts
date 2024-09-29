export interface JwtPayload {
  userId: string;
  email: string;
  name: string;
}

export interface JwtResponse {
  expiresIn: number;
  token: string;
  userId: string;
  name: string;
}
