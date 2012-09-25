import com.lowagie.text.DocumentException;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;

public class WebToPdf {

    String input, output;
    OutputStream os;
    URL dirUrl, fileUrl;


    public WebToPdf() {
        dirUrl = WebToPdf.class.getResource("./");
        try {
            fileUrl = new URL(dirUrl, "../../../src/cv.html");
            input = fileUrl.getPath();
            fileUrl = new URL(dirUrl, "../../../bin/cv.pdf");
            output = fileUrl.getPath();
        } catch (MalformedURLException e) {
            this.exit(1);
        }

        File inputFile = new File(input);
        File outputFile = new File(output);

        if(inputFile.exists()) {
            try {
                os = new FileOutputStream(outputFile);
                ITextRenderer renderer = new ITextRenderer();
                renderer.setDocument(inputFile);
                renderer.layout();
                renderer.createPDF(os, true);
                os.close();
                os = null;
            } catch (FileNotFoundException e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
            } catch (IOException e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
            } catch (DocumentException e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
            } finally {
                if (os != null) {
                    try {
                        os.close();
                    } catch (IOException e) {
                        // ignore
                    }
                }
            }
        } else {
            this.exit(1);
        }

    }

    public void exit(int code) {
        if(code == 1) {
            System.err.println("Couldn't find cv.html. Exiting.");
            System.exit(code);
        }
        System.exit(0);
    }

    public static void main(String[] args) {
        WebToPdf wtp = new WebToPdf();
    }

}
