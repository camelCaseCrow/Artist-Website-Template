// DOMContentLoade event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function() {

    const mediumField = document.getElementById("id_medium"); // id_ since django renders html with the prefix 
    const customMediumField = document.querySelector(".form-row.field-custom_medium"); // value of class in div, to have whole field be part of the toggle

    function toggleCustomMediumField(value) {
        if (value === "OTH") { // if "Other" is selected
            customMediumField.style.display = ""; 
        } else {
            customMediumField.style.display = "none";
        }
    }

    toggleCustomMediumField(mediumField.value);

    // update field visibility dynamically without refreshing page
    mediumField.addEventListener("change", function() {
        toggleCustomMediumField(this.value);
    });

});

// (function($) {
//     $(function() {
//         var medium_field = $('#id_medium'),
//             // custom_medium_field = $('.custom_medium');
//             custom_medium_field = $('#id_custom_medium');

//         function toggleCustomMediumField(value) {
//             if (value === 'OTH') {
//                 custom_medium_field.show();
//             } else {
//                 custom_medium_field.hide();
//             }
//         }

//         // show/hide on load based on existing value of medium
//         toggleCustomMediumField(medium_field.val());

//         // show/hide on change
//         medium_field.change(function() {
//             toggleCustomMediumField($(this).val());
//         });
//     });
// })(django.jQuery);
