import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/list', { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>JohnPGame</h1>
        <p style={styles.subtitle}>Sign in with your Microsoft account to manage your list.</p>
        <button style={styles.button} onClick={login}>
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
  } as CSSProperties,
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '48px 40px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center' as const,
  } as CSSProperties,
  title: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '12px',
    color: '#1a1a1a',
  } as CSSProperties,
  subtitle: {
    color: '#555',
    marginBottom: '32px',
    lineHeight: 1.5,
  } as CSSProperties,
  button: {
    background: '#0078d4',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
  } as CSSProperties,
};
