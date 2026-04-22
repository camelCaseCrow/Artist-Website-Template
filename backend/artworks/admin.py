from django.contrib import admin
from artworks.models import ArtworkPost

# Register your models here.
class ArtworkPostAdmin(admin.ModelAdmin):
    list_filter = ("category",)
    list_display = ('title', 'year_of_creation', 'size_cm', 'price')
    prepopulated_fields = {'slug': ('title',)}

    def size_cm(self, artwork):
        if artwork.width_cm and artwork.height_cm and artwork.depth_cm is None:
            return f"{artwork.width_cm} x {artwork.height_cm}"
        if artwork.width_cm and artwork.height_cm and artwork.depth_cm:
            return f"{artwork.width_cm} x {artwork.height_cm} x {artwork.depth_cm}"
        return "-"

    class Media:
        js = ("js/custom_medium_dropdown.js", "js/custom_material_dropdown.js", "js/custom_style_dropdown.js",)


admin.site.register(ArtworkPost, ArtworkPostAdmin)