from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class CategoryType(models.TextChoices):
    PAINTING = "PAI", _("Painting")
    DRAWING = "DRA", _("Drawing")

class StyleType(models.TextChoices):
    ABSTRACT = "ABS", _("Abstract")
    SURREALISM = "SUR", _("Surrealism")
    EXPRESSIONISM = "EXP", _("Expressionism")
    OTHER = "OTH", _("Other")

class MaterialType(models.TextChoices):
    CANVAS = "CAN", _("Canvas")
    PAPER = "PAP", _("Paper")
    OTHER = "OTH", _("Other")

class MediumType(models.TextChoices):
    INK = "INK", _("Ink")
    OIL = "OIL", _("Oil")
    ACRYLIC = "ACRL", _("Acrylic")
    PENCIL = "PENC", _("Pencil")
    OTHER = "OTH", _("Other")


class ArtworkPost(models.Model):
    category = models.CharField(max_length = 3, choices = CategoryType, default = CategoryType.PAINTING)
    image = models.ImageField(upload_to = 'artworks/')
    title = models.CharField(max_length = 100)
    slug = models.SlugField(unique = True, help_text = "Unique id at the end of this artwork's url") # id at end of url
    price= models.DecimalField(max_digits=8, decimal_places=2)

    year_of_creation = models.DecimalField(max_digits=4, decimal_places=0)
    width_cm = models.DecimalField(max_digits=5, decimal_places=1)
    height_cm = models.DecimalField(max_digits=5, decimal_places=1)
    depth_cm = models.DecimalField(max_digits=5, decimal_places=1, null= True, blank = True)
    medium = models.CharField(max_length = 4, choices = MediumType, default = MediumType.OIL) 
    custom_medium = models.CharField(max_length = 50, default= "", blank = True)
    material = models.CharField(max_length = 3, choices = MaterialType, default = MaterialType.CANVAS)
    custom_material = models.CharField(max_length = 50, default= "", blank = True)
    style =  models.CharField(max_length = 4, choices = StyleType, default = StyleType.ABSTRACT)
    custom_style = models.CharField(max_length = 50, default= "", blank = True)
    artwork_description = models.TextField()

    def clean(self):
        if self.medium == MediumType.OTHER and not self.custom_medium:
                raise ValidationError({
                    "Custom medium is required when type is 'Other'"
                })

        # not used since field only drops down if other is selected
        if self.medium != MediumType.OTHER and self.custom_medium:
            raise ValidationError({
                "Custom medium must be empty unless type is 'Other'"
            })
        
        if self.material == MaterialType.OTHER and not self.custom_material:
                raise ValidationError({
                    "Custom material is required when type is 'Other'"
                })

        if self.material != MaterialType.OTHER and self.custom_material:
            raise ValidationError({
                "Custom material must be empty unless type is 'Other'"
            })
        
        if self.style == StyleType.OTHER and not self.custom_style:
                raise ValidationError({
                    "Custom style is required when type is 'Other'"
                })

        if not (1000 <= self.year_of_creation <= 9999):
            raise ValidationError("Year of creation must be a 4 digit number")
        
        if self.style != StyleType.OTHER and self.custom_style:
            raise ValidationError({
                "Custom style must be empty unless type is 'Other'"
            })
        
        if self.depth_cm == "":
            self.depth_cm = None

    def __str__(self):
        return self.title


