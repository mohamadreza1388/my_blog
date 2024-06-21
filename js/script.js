$(function () {
    $(".copy-btn").click(function () {
        navigator.clipboard.writeText($(this).parent(".header").siblings(".content").children("pre").children(".code_tag").text().trim());
        $(this).text("کپی شد!").append("<i class='fas fa-check ms-1'></i>")
        restore_text()
    })
    function restore_text() {
        setTimeout(function () {
            $(".copy-btn").text("کپی کردن کد")
        },2000)
    }
})