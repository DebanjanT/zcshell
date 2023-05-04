#!usr/bin/env bash

cd ..
cd csgoserver
cd cfg

file="csgoserver.cfg"

while read -r line; do
    echo -e "$line\n"
done 