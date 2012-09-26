# xolan/cv

HTML cv template.

Rename data-example.js to data.js, and fill inn wanted data.

## Dependencies

### SCSS

To use SCSS you need [Ruby](http://rubyinstaller.org/) and [SASS](http://sass-lang.com/). You can however ignore the SCSS-file if you prefer to work with plain CSS.

#### Ubuntu

1. Install Ruby and Gem

        sudo apt-get install ruby-full rubygems

2. Install SASS

        sudo gem install sass

3. Run SASS

        cd src
        sass --scss --watch cv.scss:cv.css

While SASS is running, this will "compile" the SCSS to regular CSS whenever you save changes to cv.scss. You can stop watching by entering `^C (CTRL+C)`.

### PDF

For converting the cv to a pdf I recommend using wkhtmltopdf as it handles both the HTML, CSS and Javascript. While the output doesn't look exactly like the browser version, it doesn't look terrible. Some CSS rules seem to be left out.

If the binary distribution of wkhtmltopdf does not work correctly for you, you can try compiling it yourself. Below are instructions for Ubuntu and ArchLinux.

#### Ubuntu

1. Become root

        sudo -i

2. Update

        apt-get update
        apt-get upgrade

3. Install the needed dependencies for wkhtmltopdf

        apt-get build-dep libqt4-gui libqt4-network libqt4-webkit

#### ArchLinux

1. Install dependencies

        sudo pacman -S base-devel qt
        sudo pacman -S openssl git

#### WKHTMLTOPDF

1. Set up a sensible working area under CV's directory

        mkdir wkhtmltopdf
        cd wkhtmltopdf

2. Install the custom Qt version for wkhtmltopdf

        git clone git://gitorious.org/+wkhtml2pdf/qt/wkhtmltopdf-qt.git wkhtmltopdf-qt
        cd wkhtmltopdf-qt
        ./configure -nomake tools,examples,demos,docs,translations -opensource -prefix ../wkqt
        make -j3
        make install
        cd ..

3. Install wkhtmltopdf

        git clone git://github.com/antialize/wkhtmltopdf.git wkhtmltopdf
        cd wkhtmltopdf
        ../wkqt/bin/qmake
        make -j3
        make install
        cd ..

4. Enter CV's directory and exit root

        cd ..
        exit

5. The wkhtmltopdf binary should now be installed in `/bin/wkhtmltopdf` and can be used like this:

        /bin/wkhtmltopdf src/cv.html bin/cv.pdf

_Guide based on: http://blog.tcs.de/install-wkhtmltopdf-on-ubuntu-server/ and confirmed to work under Ubuntu x86_64 12.04._

## Credits

Adrien Friggeri: https://github.com/afriggeri/cv _For design inspiration._