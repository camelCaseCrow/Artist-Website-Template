from django.urls import path
from .views import get_blog_posts, get_single_blog

urlpatterns = [
    path('blog_posts/', get_blog_posts, name='get_blog_posts'),
    path('blog_posts/<slug:slug>', get_single_blog, name='get_single_blog')
]