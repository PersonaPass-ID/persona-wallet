# PersonaPass Wallet Frontend

The PersonaPass wallet frontend application for decentralized identity management.

## Features

- **DID Creation**: Create decentralized identifiers on PersonaChain
- **Credential Storage**: Store verifiable credentials securely
- **Zero-Knowledge Proofs**: Generate privacy-preserving proofs
- **Google Authenticator**: Mandatory 2FA for all accounts
- **Token Management**: Store and manage PERSONA tokens
- **Blockchain Integration**: Direct integration with PersonaChain

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **CosmJS** - Blockchain integration
- **React Hook Form** - Form management

## Environment Variables

```bash
# PersonaChain Connection
NEXT_PUBLIC_RPC_URL=http://your-personachain-node:26657
NEXT_PUBLIC_CHAIN_ID=personachain-1
NEXT_PUBLIC_DENOM=upersona

# Authentication
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=your-app-url

# Backend Services
LAMBDA_API_KEY=your-lambda-api-key
TOTP_LAMBDA_URL=your-totp-lambda-url
LOGIN_LAMBDA_URL=your-login-lambda-url

# Database
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-database-url
```

## Development

```bash
npm install
npm run dev
```

## Deployment

This app is designed to be deployed on Vercel with automatic deployments from GitHub.

## License

MIT License - See LICENSE file for details.
