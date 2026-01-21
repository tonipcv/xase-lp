#!/bin/bash

# Script to run the data access fields migration
# Usage: ./scripts/run-migration.sh

set -e

echo "🔄 Running migration: add_data_access_fields"
echo ""

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "❌ Error: DATABASE_URL environment variable is not set"
  echo "Please set it in your .env file or export it"
  exit 1
fi

# Run the migration
node prisma/migrations/add_data_access_fields.js

echo ""
echo "✅ Migration completed successfully"
echo ""
echo "Next steps:"
echo "1. Run 'npx prisma generate' to update Prisma Client"
echo "2. Restart your dev server"
