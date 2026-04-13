# Azure App Registration Setup

## Overview
JohnPGame uses Azure Entra ID for authentication. A single App Registration handles both the SPA (frontend) and the API (backend).

## Steps

### 1. Create App Registration
1. Go to Azure Portal → Azure Active Directory → App registrations → New registration
2. Name: `JohnPGame`
3. Supported account types: Accounts in this organizational directory only (Single tenant)
4. Redirect URI: Platform = Single-page application (SPA), URI = `https://your-domain.com`
   - Also add `http://localhost:3000` for local development

### 2. Note the IDs
From the Overview page, copy:
- **Application (client) ID** → use as `AZURE_CLIENT_ID` and `VITE_AZURE_CLIENT_ID`
- **Directory (tenant) ID** → use as `AZURE_TENANT_ID` and `VITE_AZURE_TENANT_ID`

### 3. Configure Authentication
Under Authentication:
- Platform: Single-page application
- Redirect URIs: `https://your-domain.com`, `http://localhost:3000`
- Front-channel logout URL: _(optional)_
- Implicit grant: Leave **unchecked** (MSAL 3.x uses auth code flow by default)

### 4. Expose an API (optional but recommended)
Under "Expose an API":
- Set Application ID URI: `api://{client-id}`
- Add scope: `access_as_user` (or leave as `.default` which the app uses)

### 5. Environment Variables
Set these in Coolify (or your .env file):

| Variable | Value | Where |
|----------|-------|-------|
| `AZURE_TENANT_ID` | Directory (tenant) ID | Server |
| `AZURE_CLIENT_ID` | Application (client) ID | Server |
| `VITE_AZURE_TENANT_ID` | Same as above | Client (build arg) |
| `VITE_AZURE_CLIENT_ID` | Same as above | Client (build arg) |
| `VITE_REDIRECT_URI` | `https://your-domain.com` | Client (build arg) |
| `CORS_ORIGIN` | `https://your-domain.com` | Server |

## Token Validation

The backend validates tokens against:
- **Audience**: `AZURE_CLIENT_ID`
- **Issuer**: `https://login.microsoftonline.com/{AZURE_TENANT_ID}/v2.0`
- **Algorithm**: RS256 (verified via JWKS endpoint)

JWKS endpoint: `https://login.microsoftonline.com/{tenant-id}/discovery/v2.0/keys`
