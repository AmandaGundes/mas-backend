import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface Token {
  sub: string;
  role: string;
}

export default function authenticated(request: Request, reponse: Response, next: NextFunction) {
  const headerAuthorization = request.headers.authorization;

  if (!headerAuthorization) {
    return {
      error: "JWT Token not found"
    }
  }

  const [, token] = headerAuthorization.split(' ');

  const verifyToken = verify(token, authConfig.jwt.publicKey);

  if (!verifyToken) {
    throw new Error()
  }

  const { sub, role } = verifyToken as Token;

  request.body.user = {
    id: sub,
    role: role
  }

  return next();
}