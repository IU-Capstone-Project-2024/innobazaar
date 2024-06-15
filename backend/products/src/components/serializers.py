from rest_framework import serializers
from products.src.models.models import Vendors, Contacts, Products, Categories

class VendorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendors
        fields = ['vendor_id', 'name', 'address', 'rating']

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = ['vendor_id', 'type', 'value']

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_id', 'vendor_id', 'name', 'rating', 'price']

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['product_id', 'category']
