#!/bin/bash
command -v wkhtmltopdf >/dev/null 2>&1 || { echo >&2 "I require wkhtmltopdf but it's not installed.  Aborting."; exit 1; }

USER='svarvaa'
HOST='login.stud.ntnu.no'

SRC='src/cv.html'
BIN='bin/cv.pdf'
DATA_EXAMPLE='src/data-example.js'
DATA='src/data.js'

if [ -f $DATA ]; then
   echo "[ INFO ] File $DATA exists."
   ##wkhtmltopdf $SRC $BIN
   echo "[ INFO ] PDF binary located at $BIN"
   
   if [ "$1" == "push" ]; then

        echo "[ INFO ] Attempting to push src files to host."
        rsync src/* $USER@$HOST:public_html/cv/

        if [[ "$2" == "+fonts" ]] || [[ "$3" == "+fonts" ]] ; then
            echo "[ INFO ] Attempting to push font files to host."
            rsync fonts/* $USER@$HOST:public_html/fonts/
        fi

        if [[ "$2" == "+pdf" ]] || [[ "$3" == "+pdf" ]] ; then
            echo "[ INFO ] Attempting to push bin(pdf) file(s) to host."
            rsync bin/cv.pdf $USER@$HOST:public_html/cv/cv.pdf
        fi

    fi

else
   echo "[ ERROR ] File $DATA does not exist."
   echo "[ INFO ] Please make a copy of $DATA_EXAMPLE to $DATA and fill in your data."
fi

exit 0
