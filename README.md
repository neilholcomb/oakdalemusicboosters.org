This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Environment Variables

For local development, create a `.env.local` file in the root directory with your Square API credentials:

```bash
SQUARE_APPLICATION_ID=your_square_application_id_here
SQUARE_ACCESS_TOKEN=your_square_access_token_here
SQUARE_ENVIRONMENT=sandbox
```

**Note:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

For production deployment on Vercel, set these environment variables in your Vercel dashboard under Settings > Environment Variables.

### Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### API Endpoints

- [http://localhost:3000/api/sales-data](http://localhost:3000/api/sales-data) - Returns fireworks sales data
- [http://localhost:3000/api/hello](http://localhost:3000/api/hello) - Example API endpoint

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
