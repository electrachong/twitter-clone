document.addEventListener("DOMContentLoaded", function () {

    var postLink = document.getElementById("create_button");
    var postForm = document.getElementById("postForm");
    postLink.addEventListener("click", toggleForm);

    function toggleForm() {
        postForm.toggle();
    }

})