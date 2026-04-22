// DOMContentLoade event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function() {

    const styleField = document.getElementById("id_style"); // id_ since django renders html with the prefix 
    const customStyleField = document.querySelector(".form-row.field-custom_style"); // value of class in div, to have whole field be part of the toggle

    function toggleCustomStyleField(value) {
        if (value === "OTH") { // if "Other" is selected
            customStyleField.style.display = ""; 
        } else {
            customStyleField.style.display = "none";
        }
    }

    toggleCustomStyleField(styleField.value);

    // update field visibility dynamically without refreshing page
    styleField.addEventListener("change", function() {
        toggleCustomStyleField(this.value);
    });

});

// (function($) {
//     $(function() {
//         var style_field = $('#id_style'),
//             // custom_style_field = $('.custom_style');
//             custom_style_field = $('#id_custom_style');

//         function toggleCustomStyleField(value) {
//             if (value === 'OTH') {
//                 custom_style_field.show();
//             } else {
//                 custom_style_field.hide();
//             }
//         }

//         // show/hide on load based on existing value of style
//         toggleCustomStyleField(style_field.val());

//         // show/hide on change
//         style_field.change(function() {
//             toggleCustomStyleField($(this).val());
//         });
//     });
// })(django.jQuery);
