#!/bin/bash
git checkout -- pnpm-lock.yarml
git pull
pnpm install
pnpm run build
pm2 delete hom.wang
yarn prd