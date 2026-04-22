from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status # status codes
from artworks.models import ArtworkPost, CategoryType
from .serializers import ArtworkSerializer

@api_view(['GET'])
def get_paintings(request):
    paintings = ArtworkPost.objects.filter(
        category = CategoryType.PAINTING
    ) # all painting posts
    serializedData = ArtworkSerializer(paintings, many = True).data # accept many since artworks is an array of objects
    
    return Response(serializedData) # rendered out as JSON data


@api_view(['GET'])
def get_drawings(request):
    drawings = ArtworkPost.objects.filter(
        category = CategoryType.DRAWING
    ) 
    serializedData = ArtworkSerializer(drawings, many = True).data 
    
    return Response(serializedData) 

@api_view(['GET'])
def get_single_artwork(request, slug):
    try:
        artwork = ArtworkPost.objects.get(slug=slug) 
        serializedData = ArtworkSerializer(artwork).data 
        
        return Response(serializedData)
    
    except ArtworkPost.DoesNotExist:
        return Response({"error": "Artwork not found"}, status=404)
