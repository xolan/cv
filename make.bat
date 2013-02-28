@ECHO off
SET wk="%PROGRAMFILES(X86)%\wkhtmltopdf\wkhtmltopdf.exe"
SET switches="--debug-javascript"
ECHO ###################################################
ECHO # Wkhtmltopdf located at %wk%.
ECHO ###################################################
%wk% %switches% src\cv.html bin\cv.pdf
