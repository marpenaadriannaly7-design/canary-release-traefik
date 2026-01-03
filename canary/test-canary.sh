#!/bin/bash

STABLE=0
CANARY=0

for i in {1..20}
do
  RESPONSE=$(curl -s http://localhost/version)

  if echo "$RESPONSE" | grep -q "CANARY"; then
    CANARY=$((CANARY+1))
  else
    STABLE=$((STABLE+1))
  fi
done

echo "STABLE: $STABLE"
echo "CANARY: $CANARY"
