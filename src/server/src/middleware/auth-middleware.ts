import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';
import { AuthRequest } from '../types';

// Singleton JWKS client with caching and rate limiting
const jwksClient = jwksRsa({
  jwksUri: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/discovery/v2.0/keys`,
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
});

function getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback): void {
  if (!header.kid || typeof header.kid !== 'string') {
    callback(new Error('Missing or invalid kid in token header'));
    return;
  }
  jwksClient.getSigningKey(header.kid, (err, key) => {
    if (err || !key) {
      callback(err ?? new Error('No signing key found'));
      return;
    }
    callback(null, key.getPublicKey());
  });
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing or invalid Authorization header' });
    return;
  }

  const token = authHeader.slice(7);

  jwt.verify(
    token,
    getKey,
    {
      audience: process.env.AZURE_CLIENT_ID,
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0`,
      algorithms: ['RS256'],
    },
    (err, decoded) => {
      if (err || !decoded || typeof decoded === 'string') {
        res.status(401).json({ error: 'Invalid or expired token' });
        return;
      }

      const claims = decoded as jwt.JwtPayload;

      if (!claims['oid'] || typeof claims['oid'] !== 'string') {
        res.status(401).json({ error: 'Invalid or expired token' });
        return;
      }

      (req as AuthRequest).user = {
        oid: claims['oid'],
        email: (claims['preferred_username'] ?? claims['email'] ?? '') as string,
        displayName: (claims['name'] ?? '') as string,
      };

      next();
    }
  );
}
