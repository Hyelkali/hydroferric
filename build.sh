#!/bin/bash

# Install dependencies with specific flags to avoid Rollup issues
npm install --no-optional --force

# Install WebAssembly version of Rollup explicitly
npm install @rollup/wasm-node --force

# Set environment variables to use WebAssembly version
export ROLLUP_WASM_NODE=1
export NODE_OPTIONS="--max-old-space-size=4096"

# Run the build
npm run build
