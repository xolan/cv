#!/bin/bash
command -v wkhtmltopdf >/dev/null 2>&1 || { echo >&2 "I require wkhtmltopdf but it's not installed.  Aborting."; exit 1; }

FILE='src/data.js'

if [ -f $FILE ];
then
   echo "File $FILE exists."
   wkhtmltopdf src/cv.html bin/cv.pdf
else
   echo "File $FILE does not exist."
   echo "Please make a copy of src/data-example.js to src/data.js and fill in your data."
fi
