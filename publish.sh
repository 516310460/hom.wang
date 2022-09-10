#!/bin/bash
git pull
pnpm install
pm2 delete hom.wang
yarn prd