#!/usr/bin/env bash
if [ -f "$(dirname "$0")/.server.pid" ]; then
  pid=$(cat "$(dirname "$0")/.server.pid")
  kill "$pid" 2>/dev/null && echo "stopped pid $pid"
  rm -f "$(dirname "$0")/.server.pid"
fi
