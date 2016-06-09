/* Load additional statuses */

document.addEventListener("DOMContentLoaded", function () {

    var MoreStatusesLink = document.getElementById("MoreStatuses");

    MoreStatusesLink.addEventListener('click', function () {
        /* Set a timeout to emulate delayed server response */
        setTimeout(function () {
            ajaxGet('/statuses-1.html', onSuccess);
        }, 2000);

        /* Disable the button until response */
        document.body.style.cursor = "wait";
        MoreStatusesLink.disabled = true;
        MoreStatusesLink.style.backgroundColor = "lightgray"
    });


    function onSuccess(response) {
        /* Insert HTML of ajax call response into empty div extra_statuses */
        document.getElementById("extra_statuses").innerHTML = response;
        /* Make button and cursor look active again */
        MoreStatusesLink.disabled = false;
        MoreStatusesLink.style.backgroundColor = "#7d997d";
        document.body.style.cursor = "default";

        /* Run code to toggle reply forms on new statuses  */
        var additional_replies = document.querySelectorAll(".additional_replyLink");
        var additional_replyForms = document.querySelectorAll(".additional_replyForm")

        function showAdditionalReplyForm() {
            var additional_postnumber = this.getAttribute("data-additionalpostlink");
            additional_replyform = document.getElementById(additional_postnumber);
            additional_replyform.toggle();
        }

        for (var i = 0; i < additional_replies.length; i++) {
            additional_replies[i].addEventListener("click", showAdditionalReplyForm);
        }
    }

})