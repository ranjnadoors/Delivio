$(document).ready(function () {
    $('.myImage').on("click", function () {
        var checked = $(this).next('.myHiddenCheckbox').prop('checked');
        if (checked == false) {
            $('.myImage').next('.myHiddenCheckbox').attr("checked", true)
            $(this).attr("src", "images/Group 252.png");
        } else {
            $('.myImage').next('.myHiddenCheckbox').attr("checked", false)
            $(this).attr("src", "images/Group 251.png");
        }
    });
});