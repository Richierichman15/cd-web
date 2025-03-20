#!/bin/bash

# Source NVM and use the correct Node.js version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 20
nvm use 20

# Check Node.js version
node_version=$(node -v)
echo "Using Node.js $node_version"

# Run the Next.js dev server
npm run dev 