@echo off
set tool="C:\Program Files (x86)\wkhtmltopdf\wkhtmltopdf.exe"
set   in="src\cv.html"
set  out="bin\cv.pdf"
cls
echo ================================================================================
echo                     Converting html to pdf through WebKit... && echo.
echo Tool  : %tool%
echo Input : %in%
echo Output: %out% && echo.
echo --------------------------------------------------------------------------------
%tool% %in% %out% && echo.
echo ================================================================================
pause
