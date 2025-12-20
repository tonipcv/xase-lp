// Node script to insert or update a waitlist submission using Prisma raw SQL
// Usage: node scripts/add_waitlist_submission.js "Full Name" "email@example.com"

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const [,, name, email] = process.argv;

  if (!name || !email) {
    console.error('Usage: node scripts/add_waitlist_submission.js "Full Name" "email@example.com"');
    process.exit(1);
  }

  // Basic email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error('Invalid email format');
    process.exit(1);
  }

  // Ensure table exists (idempotent)
  await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS waitlist_submissions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  // Upsert by email
  await prisma.$executeRawUnsafe(
    `INSERT INTO waitlist_submissions (name, email)
     VALUES ($1, $2)
     ON CONFLICT (email)
     DO UPDATE SET name = EXCLUDED.name, updated_at = NOW();`,
    name,
    email
  );

  console.log('Stored waitlist submission for', email);
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
