# Create a Postgres database on Vercel: https://vercel.com/postgres
POSTGRES_URL=postgresql://postgres:postgres@localhost:5432/postgres
POSTGRES_PRISMA_URL=postgresql://postgres:postgres@localhost:5432/postgres
POSTGRES_URL_NON_POOLING=postgresql://postgres:postgres@localhost:5432/postgres

# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
AUTH_SECRET=f5e28b92629b013499e9ae040b7cf2d5
# postgresql://sally:sallyspassword@dbserver.example:5555/userdata?connect_timeout=10&sslmode=require&target_session_attrs=primary
