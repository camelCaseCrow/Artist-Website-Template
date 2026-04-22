// DOMContentLoade event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function() {

    const materialField = document.getElementById("id_material"); // id_ since django renders html with the prefix 
    const customMaterialField = document.querySelector(".form-row.field-custom_material"); // value of class in div, to have whole field be part of the toggle

    function toggleCustomMaterialField(value) {
        if (value === "OTH") { // if "Other" is selected
            customMaterialField.style.display = ""; 
        } else {
            customMaterialField.style.display = "none";
        }
    }

    toggleCustomMaterialField(materialField.value);

    // update field visibility dynamically without refreshing page
    materialField.addEventListener("change", function() {
        toggleCustomMaterialField(this.value);
    });

});

// (function($) {
//     $(function() {
//         var material_field = $('#id_material'),
//             // custom_material_field = $('.custom_material');
//             custom_material_field = $('#id_custom_material');

//         function toggleCustomMaterialField(value) {
//             if (value === 'OTH') {
//                 custom_material_field.show();
//             } else {
//                 custom_material_field.hide();
//             }
//         }

//         // show/hide on load based on existing value of material
//         toggleCustomMaterialField(material_field.val());

//         // show/hide on change
//         material_field.change(function() {
//             toggleCustomMaterialField($(this).val());
//         });
//     });
// })(django.jQuery);
