from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from products.src.models.models import *
from products.src.components.serializers import *

class ProductCreateView(APIView):
    def post(self, request):
        try:
            data = request.data
            vendor = Vendors.objects.first()  # Set the vendor; modify as needed for your logic
            serializer = ProductCreateSerializer(data=data)
            if serializer.is_valid():
                product = serializer.save(vendor=vendor)
                return Response({
                    'product_id': product.product_id,
                    'name': product.name,
                    'description': product.description,
                    'price': product.price,
                    'quantity': product.quantity,
                    'image': product.image.url if product.image else None,
                    'created_at': product.created_at,
                    'updated_at': product.updated_at,
                }, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
