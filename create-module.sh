#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide a folder name as an argument to the script."
  exit 1
fi

mkdir -p "./src/online-forms/modules/$1"

cd "./src/online-forms/modules/$1"
mkdir components containers logic

touch components/index.ts containers/index.ts logic/index.ts $1.module.tsx index.ts