from django.urls import path
from .views import post_contact_form


urlpatterns = [
    path('submit_contact_form/', post_contact_form, name='submit_contact_form')
]