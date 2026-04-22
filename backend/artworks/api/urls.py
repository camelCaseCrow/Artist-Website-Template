from django.urls import path
from .views import get_paintings, get_drawings, get_single_artwork

urlpatterns = [
    path('paintings/', get_paintings, name='get_paintings'),
    path('drawings/', get_drawings, name='get_drawings'),
    path('paintings/<slug:slug>/', get_single_artwork, name='get_painting'),
    path('drawings/<slug:slug>/', get_single_artwork, name='get_drawing'),
]