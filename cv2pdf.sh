#!/bin/bash

TOOL="/usr/bin/wkhtmltopdf"
IN="src/cv.html"
OUT="bin/cv.pdf"

echo "================================================================================"
echo "                    Converting html to pdf through WebKit..."
echo ""
echo "Tool  : $TOOL"
echo "Input : $IN"
echo "Output: $OUT" 
echo "--------------------------------------------------------------------------------"
$TOOL $IN $OUT
echo "================================================================================"
