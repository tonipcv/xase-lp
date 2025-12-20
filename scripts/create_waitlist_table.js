// Node script to create waitlist_submissions table via raw SQL using Prisma Client
// Uses DATABASE_URL from environment

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Creating waitlist_submissions table (if not exists)...');

  // Enable pgcrypto for gen_random_uuid (safe if already enabled)
  await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');

  // Create table
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS waitlist_submissions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  // Optional: update updated_at on row updates (create trigger + function if you want updates later)
  await prisma.$executeRawUnsafe(`
    CREATE OR REPLACE FUNCTION public.set_timestamp() RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);

  const existingTrigger = await prisma.$queryRawUnsafe(
    `SELECT tgname FROM pg_trigger WHERE tgname = 'waitlist_updated_at'`
  );

  if (!Array.isArray(existingTrigger) || existingTrigger.length === 0) {
    await prisma.$executeRawUnsafe(`
      CREATE TRIGGER waitlist_updated_at
      BEFORE UPDATE ON waitlist_submissions
      FOR EACH ROW EXECUTE PROCEDURE public.set_timestamp();
    `);
  }

  console.log('Done. Table waitlist_submissions is ready.');
}

main()
  .catch((e) => {
    console.error('Error creating table:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
