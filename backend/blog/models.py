from django.db import models
from django.utils.translation import gettext_lazy as _

class CategoryType(models.TextChoices):
    PAINTING = "PAT", _("Painting") # PA stored in database, _() makes it able to be translated in future (good practice)
    DRAWING = "DRA", _("Drawing")
    GENERAL = "GEN", _("General Entry")

class BlogPost(models.Model):
    image = models.ImageField(upload_to = 'blogs/')
    title = models.CharField(max_length = 75)
    blog_text = models.TextField()
    date = models.DateField(auto_now_add=True)
    slug = models.SlugField(unique = True, help_text = "Unique id at the end of the blog's url") # id at end of url

    def __str__(self):
        return self.title


