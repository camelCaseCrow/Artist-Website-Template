from rest_framework import serializers
from artworks.models import ArtworkPost
from decimal import Decimal # to avoid dividing decimal by float

class ArtworkSerializer(serializers.ModelSerializer):
    # prevent the database value being shown on the frontend
    medium_display = serializers.CharField(source='get_medium_display', read_only=True)
    material_display = serializers.CharField(source='get_material_display', read_only=True)
    style_display = serializers.CharField(source='get_style_display', read_only=True)

    width_cm = serializers.SerializerMethodField()
    height_cm = serializers.SerializerMethodField()
    depth_cm = serializers.SerializerMethodField()

    width_in = serializers.SerializerMethodField()
    height_in = serializers.SerializerMethodField()
    depth_in = serializers.SerializerMethodField()

    price = serializers.SerializerMethodField()


    class Meta:
        model = ArtworkPost
        fields = ['image', 'slug', 'title', 'year_of_creation', 'artwork_description', 'price', 'material_display', 'custom_material', 'medium_display', 'custom_medium', 'style_display', 'custom_style', 'width_cm', 'height_cm', 'depth_cm', 'width_in', 'height_in', 'depth_in']

    # prevent .0 on integers
    def get_width_cm(self, artwork):
        num = artwork.width_cm
        return int(num) if num == int(num) else float(num)
    
    def get_height_cm(self, artwork):
        num = artwork.height_cm
        return int(num) if num == int(num) else float(num)
    

    def get_depth_cm(self, artwork):
        if artwork.depth_cm:
            num = artwork.depth_cm
            return int(num) if num == int(num) else float(num)
        return None
    
    def get_price(self, artwork):
        num = artwork.price
        return int(num) if num == int(num) else float(num)

    # convert units
    def get_width_in(self, artwork):
        num = round(artwork.width_cm / Decimal(2.54), 1) # round to 1dp
        return int(num) if num == int(num) else float(num)

    def get_height_in(self, artwork):
        num = round(artwork.height_cm / Decimal(2.54), 1)
        return int(num) if num == int(num) else float(num)
    

    def get_depth_in(self, artwork):
        if artwork.depth_cm:
            num = round(artwork.depth_cm / Decimal(2.54), 1)
            return int(num) if num == int(num) else float(num)
        return None

    