/**
 * Migration: Add data access fields to Lead model
 * 
 * This migration adds new fields to support the data access use case:
 * - company: Company name
 * - role: User role (data-holder, ai-lab, other)
 * - dataType: Type of data they're interested in
 * - source: Where the lead came from (homepage_modal, etc)
 * 
 * Also makes legacy fields optional:
 * - whatsapp, segment, budget
 */

const { PrismaClient } = require('@prisma/client');

async function migrate() {
  const prisma = new PrismaClient();

  try {
    console.log('Starting migration: add_data_access_fields');

    // Check if we're using PostgreSQL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    console.log('Running SQL migration...');

    // Add new columns (if they don't exist)
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "Lead" 
      ADD COLUMN IF NOT EXISTS "company" TEXT,
      ADD COLUMN IF NOT EXISTS "role" TEXT,
      ADD COLUMN IF NOT EXISTS "dataType" TEXT,
      ADD COLUMN IF NOT EXISTS "source" TEXT;
    `);

    // Make legacy columns nullable
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "Lead" 
      ALTER COLUMN "whatsapp" DROP NOT NULL,
      ALTER COLUMN "segment" DROP NOT NULL,
      ALTER COLUMN "budget" DROP NOT NULL;
    `);

    console.log('Migration completed successfully');
    
    // Verify the changes
    const result = await prisma.$queryRaw`
      SELECT column_name, is_nullable, data_type
      FROM information_schema.columns
      WHERE table_name = 'Lead'
      ORDER BY ordinal_position;
    `;
    
    console.log('Current Lead table schema:');
    console.table(result);

  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run migration if called directly
if (require.main === module) {
  migrate()
    .then(() => {
      console.log('Migration script completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Migration script failed:', error);
      process.exit(1);
    });
}

module.exports = { migrate };
