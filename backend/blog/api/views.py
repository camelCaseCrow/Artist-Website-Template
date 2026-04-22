from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status # status codes
from blog.models import BlogPost
from .serializers import BlogPostSerializer

@api_view(['GET'])
def get_blog_posts(request):
    blog_posts = BlogPost.objects.all() # all blog posts
    serializedData = BlogPostSerializer(blog_posts, many = True).data # accept many since blog_posts is an array of objects
    
    return Response(serializedData)

@api_view(['GET'])
def get_single_blog(request, slug):
    try:
        blog = BlogPost.objects.get(slug=slug) 
        serializedData = BlogPostSerializer(blog).data 
        
        return Response(serializedData)
    
    except BlogPost.DoesNotExist:
        return Response({"error": "Blog not found"}, status=404)