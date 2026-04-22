from django.db import models

class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    # website = models.CharField(required=False, widget=models.HiddenInput())  # honeypot

    def __str__(self):
        return self.name