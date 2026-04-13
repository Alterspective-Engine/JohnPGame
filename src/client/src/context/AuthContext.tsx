import { createContext, useContext, ReactNode } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { tokenRequest } from '../msal-config';

interface AuthContextValue {
  isAuthenticated: boolean;
  user: { name?: string; username?: string } | null;
  getAccessToken: () => Promise<string>;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = accounts[0] ?? null;

  async function getAccessToken(): Promise<string> {
    if (!account) throw new Error('Not authenticated');
    const response = await instance.acquireTokenSilent({
      ...tokenRequest,
      account,
    });
    return response.accessToken;
  }

  function login(): void {
    instance.loginRedirect(tokenRequest);
  }

  function logout(): void {
    instance.logoutRedirect();
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user: account ? { name: account.name, username: account.username } : null,
        getAccessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
