$(document).ready(function() {
    function fillData() {
        // See data.js for info on the data object.
        
        // TITLE
        $("#title span.firstName").html(data.firstName.toLowerCase());
        $("#title span.lastName").html(data.lastName.toLowerCase());

        // INTERESTS
        $("#aInt p").html(data.interests.join(', '));

        // EDUCATION
        s_edu = " \
            <tbody> \
            ";
        for (var i = 0; i < data.education.length; i++) {
            s_edu = s_edu + "<tr>";
            s_edu = s_edu + "   <td class='year'>" + data.education[i].when + "</td>";
            s_edu = s_edu + "   <td class='desc'>" + data.education[i].what + "</td>";
            s_edu = s_edu + "   <td class='inst'>" + data.education[i].where + "</td>";
            s_edu = s_edu + "</tr>";
        };
        s_edu = s_edu + " \
            </tbody> \
        ";
        $("#aEdu table").html(s_edu);

        // EXPERIENCE
        s_exp = " \
            <tbody> \
            ";
        for (var i = 0; i < data.experience.length; i++) {
            s_exp = s_exp + "<tr>";
            s_exp = s_exp + "   <td class='year'>" + data.experience[i].when + "</td>";
            s_exp = s_exp + "   <td class='desc'>" + data.experience[i].what + "</td>";
            s_exp = s_exp + "   <td class='inst'>" + data.experience[i].where + "</td>";
            s_exp = s_exp + "</tr>";
        };
        s_exp = s_exp + " \
            </tbody> \
        ";
        $("#aExp table").html(s_exp);

        // EXTRA CURRICULAR
        s_ext = " \
            <tbody> \
            ";
        for (var i = 0; i < data.extra.length; i++) {
            s_ext = s_ext + "<tr>";
            s_ext = s_ext + "   <td class='year'>" + data.extra[i].when + "</td>";
            s_ext = s_ext + "   <td class='desc'>" + data.extra[i].what + "</td>";
            s_ext = s_ext + "   <td class='inst'>" + data.extra[i].where + "</td>";
            s_ext = s_ext + "</tr>";
        };
        s_ext = s_ext + " \
            </tbody> \
        ";
        $("#aExt table").html(s_ext);

        // ONLINE
        s_online = "";
        for (var i = 0; i < data.online.length; i++) {
            s_online = s_online + "<dt><a href='" + data.online[i].link + "'>" + data.online[i].link + "</a></dt>";
            s_online = s_online + "<dd>" + data.online[i].desc + "</dd>";
        };
        $("#aOn dl").html(s_online);

        // ABOUT
        s_about = " \
            <dd>" + data.address + "</dd> \
            <dd>" + data.zip + " " + data.city + "</dd> \
            <dd>" + data.country + "</dd> \
            <br /> \
            <dd>" + data.email + "</dd> \
            <dd>" + data.phone + "</dd> \
        ";
        $("#about").after(s_about)

        // LANGUAGES
        s_lang = ""
        for (var i = 0; i < data.languages.length; i++) {
            s_lang = s_lang + "<dd>" + data.languages[i] + "</dd>";
        };
        $("#languages").after(s_lang)

        // PROGRAMMING
        s_prog = ""
        for (var i = 0; i < data.programming.length; i++) {
            s_prog = s_prog + "<dd>" + data.programming[i] + "</dd>";
        };
        $("#programming").after(s_prog)

        // OTHER
        s_other = ""
        for (var i = 0; i < data.other.length; i++) {
            s_other = s_other + "<dd>" + data.other[i] + "</dd>";
        };
        $("#other").after(s_other)

        // QR-CODE
        $("#qr").attr("src", "http://qrcode.kaywa.com/img.php?s=6&d=" + encodeURIComponent(data.cvURL));

        // META
        document.title = data.firstName + " " + data.lastName + "'s curriculum vitæ";
        document.head.insertAdjacentHTML(
            'beforeEnd',
            '<meta name="description" content="' + data.firstName + " " + data.lastName + "\'s curriculum vitæ" + '" />'
            );
        document.head.insertAdjacentHTML(
            'beforeEnd',
            '<meta name="keywords" content="' + data.firstName + ', ' + data.lastName + ', ' + data.firstName + ' ' + data.lastName + ', CV, cv, curriculum vitæ" />'
            );
        document.head.insertAdjacentHTML(
            'beforeEnd',
            '<meta name="author" content="' + data.firstName + ' ' + data.lastName + '" />'
            );
    }
    
    titleSubtitleOriginalText = $("#title .subtitle").html();

    function clearClasses(element) {
        colors = ["white", "blue", "red", "orange", "purple", "green"];
        for (var i = colors.length - 1; i >= 0; i--) {
            $(element).removeClass(colors[i]);
        }
    }
    
    function replaceSubTitle(text) {
        $("#title .subtitle").fadeOut(250, function() {
            $("#title .subtitle").html(text);
            $("#title .subtitle").fadeIn(250);
        });
    }

    $("#aInt").mouseenter(function() {
        clearClasses("#title .lastName");
        replaceSubTitle("interests");
        $("#title .lastName").addClass("blue");
    });
    
    $("#aEdu").mouseenter(function() {
        clearClasses("#title .lastName");
        replaceSubTitle("education");
        $("#title .lastName").addClass("red");
    });
    
    $("#aExp").mouseenter(function() {
        clearClasses("#title .lastName");
        replaceSubTitle("experience");
        $("#title .lastName").addClass("orange");
    });
    
    $("#aExt").mouseenter(function() {
        clearClasses("#title .lastName");
        replaceSubTitle("extra curricular");
        $("#title .lastName").addClass("green");
    });

    $("#aOn").mouseenter(function() {
        clearClasses("#title .lastName");
        replaceSubTitle("online");
        $("#title .lastName").addClass("purple");
    });
    
    $("section").mouseleave(function() {
        clearClasses("#title .lastName");
        replaceSubTitle(titleSubtitleOriginalText);
        $("#title .lastName").addClass("white");
    });

    fillData();

});
