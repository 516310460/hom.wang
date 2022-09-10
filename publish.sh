#!/bin/bash
git pull
pnpm install
pnpm run build
pm2 delete hom.wang
yarn prd