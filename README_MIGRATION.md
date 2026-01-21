# Database Migration: Data Access Fields

## Overview

This migration adds new fields to the `Lead` model to support the data access use case and makes legacy fields optional.

## Changes

### New Fields Added
- `company` (String, optional) - Company name
- `role` (String, optional) - User role: `data-holder`, `ai-lab`, or `other`
- `dataType` (String, optional) - Type of data they're interested in
- `source` (String, optional) - Lead source (e.g., `homepage_modal`)

### Fields Made Optional
- `whatsapp` - No longer required
- `segment` - No longer required
- `budget` - No longer required

## Running the Migration

### Option 1: Using the migration script (Recommended)

```bash
# Make sure DATABASE_URL is set in your .env file
./scripts/run-migration.sh
```

### Option 2: Using Prisma Migrate

```bash
# Generate a new migration
npx prisma migrate dev --name add_data_access_fields

# Or apply to production
npx prisma migrate deploy
```

### Option 3: Manual SQL (if needed)

```sql
-- Add new columns
ALTER TABLE "Lead" 
ADD COLUMN IF NOT EXISTS "company" TEXT,
ADD COLUMN IF NOT EXISTS "role" TEXT,
ADD COLUMN IF NOT EXISTS "dataType" TEXT,
ADD COLUMN IF NOT EXISTS "source" TEXT;

-- Make legacy columns nullable
ALTER TABLE "Lead" 
ALTER COLUMN "whatsapp" DROP NOT NULL,
ALTER COLUMN "segment" DROP NOT NULL,
ALTER COLUMN "budget" DROP NOT NULL;
```

## After Migration

1. **Regenerate Prisma Client:**
   ```bash
   npx prisma generate
   ```

2. **Restart your development server:**
   ```bash
   npm run dev
   ```

3. **Verify the changes:**
   ```bash
   npx prisma studio
   ```

## API Changes

The `/api/leads` endpoint now accepts:

```typescript
{
  name: string;        // Required
  email: string;       // Required
  company?: string;    // Optional
  role?: string;       // Optional - 'data-holder' | 'ai-lab' | 'other'
  dataType?: string;   // Optional
  source?: string;     // Optional
  // Legacy fields (now optional)
  whatsapp?: string;
  segment?: string;
  budget?: string;
}
```

## Rollback

If you need to rollback:

```sql
-- Remove new columns
ALTER TABLE "Lead" 
DROP COLUMN IF EXISTS "company",
DROP COLUMN IF EXISTS "role",
DROP COLUMN IF EXISTS "dataType",
DROP COLUMN IF EXISTS "source";

-- Make legacy columns required again (if needed)
ALTER TABLE "Lead" 
ALTER COLUMN "whatsapp" SET NOT NULL,
ALTER COLUMN "segment" SET NOT NULL,
ALTER COLUMN "budget" SET NOT NULL;
```

## Notes

- The Prisma schema warning about `url` in datasource can be ignored for now (Prisma v7 change)
- Existing leads in the database will have NULL values for the new fields
- The modal form now collects role and data type information
- All form submissions are saved to the database before redirecting to Cal.com
