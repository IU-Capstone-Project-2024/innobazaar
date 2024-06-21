from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from products.src.models.models import *
from products.src.components.serializers import *

class ItemView(APIView):
    def post(self, request):
        try:
            data = request.data
            product_id = data.get('product_id')
            vendor_id = data.get('vendor_id')

            try:
                product = Products.objects.get(product_id=product_id)
                vendor = Vendors.objects.get(vendor_id=vendor_id)
            except Products.DoesNotExist:
                return Response({'code': 404, 'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
            except Vendors.DoesNotExist:
                return Response({'code': 404, 'message': 'Vendor not found'}, status=status.HTTP_404_NOT_FOUND)

            contacts = Contacts.objects.filter(vendor=vendor)
            contact_info = ContactsSerializer(contacts, many=True).data

            item_info = {
                'product_id': product.product_id,
                'product_name': product.name,
                'description': product.description,
                'product_rating': product.rating,
                'product_price': product.price,
                'vendor_name': vendor.name,
                'vendor_address': vendor.address,
                'vendor_rating': vendor.rating,
                'vendor_contacts': contact_info,
            }

            return Response(item_info, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'code': 500, 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
