# xolan/cv

HTML cv template.

Rename data-example.js to data.js, and fill inn wanted data.

## Dependencies

### SCSS

To use SCSS you need [Ruby](http://rubyinstaller.org/) and [SASS](http://sass-lang.com/). You can however ignore the SCSS-file if you prefer to work with plain CSS.

#### Ubuntu

Install Ruby and Gem

    sudo apt-get install ruby-full rubygems

Install SASS

    sudo gem install sass

Run SASS

    cd src
    sass --scss --watch cv.scss:cv.css

While SASS is running, this will "compile" the SCSS to regular CSS whenever you save changes to cv.scss. You can stop watching by entering `^C (CTRL+C)`.

### PDF

For converting the cv to a pdf I recommend using wkhtmltopdf as it handles both the HTML, CSS and Javascript. While the output doesn't look exactly like the browser version, it doesn't look terrible. Some CSS rules seem to be left out.

#### Ubuntu

On Ubuntu you should use the patched Qt version instead of the one supplied through apt-get.

Root

    sudo -i

Update

    apt-get update
    apt-get upgrade

Install the needed dependencies for wkhtmltopdf

    apt-get build-dep libqt4-gui libqt4-network libqt4-wekbit
    apt-get install openssl build-essenttial git-code git-doc libssl-dev

Set up a sensible working area under CV's directory

    mkdir wkhtmltopdf
    cd wkhtmltopdf

Install the custom Qt version for wkhtmltopdf

    git clone git://gitorious.org/+wkhtml2pdf/qt/wkhtmltopdf-qt.git wkhtmltopdf-qt
    cd wkhtmltopdf-qt
    ./configure -nomake tools,examples,demos,docs,translations -opensource -prefix ../wkqt
    make -j3
    make install
    cd ..

Install wkhtmltopdf

    git clone git://github.com/antialize/wkhtmltopdf.git wkhtmltopdf
    cd wkhtmltopdf
    ../wkqt/bin/qmake
    make -j3
    make install
    cd ..

Enter CV's directory and exit root

    cd ..
    exit

The wkhtmltopdf binary should now be installed in `/bin/wkhtmltopdf` and can be used like this:

    /bin/wkhtmltopdf src/cv.html bin/cv.pdf

_Guide based on: http://blog.tcs.de/install-wkhtmltopdf-on-ubuntu-server/ and confirmed to work under Ubuntu x86_64 12.04._

## Credits

Adrien Friggeri: https://github.com/afriggeri/cv _For design inspiration._

## License

Copyright (C) 2012, Jonas Svarvaa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
