$(document).ready(function() {
    
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

});
