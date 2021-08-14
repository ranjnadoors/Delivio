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



$(document).ready(function () {
    $('.myImage-1').on("click", function () {
        var checked = $(this).next('.myHiddenCheckbox').prop('checked');
        if (checked == false) {
           
            $('.myImage-1').next('.myHiddenCheckbox').attr("checked", true)
            $(this).attr("src", "shipper-img/Group 282.png");
        } else {
            
            $('.myImage-1').next('.myHiddenCheckbox').attr("checked", false)
            $(this).attr("src", "shipper-img/Group 307.png");
        }
    });
});