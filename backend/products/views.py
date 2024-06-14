from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
import logging

logger = logging.getLogger(__name__)

class ProductListView(APIView):
    def post(self, request):
        try:
            data = request.data
            limit = data.get('limit', 5)
            category = data.get('category', 'all')
            sort_by = data.get('sort_by', 'cheapest')
            cursor = data.get('cursor', 0)
            min_cost = data.get('min_cost', 0)
            max_cost = data.get('max_cost')

            products = Products.objects.only('product_id', 'name', 'rating', 'price', 'vendor')

            if category != 'all':
                products = products.filter(categories__category=category)

            if min_cost:
                products = products.filter(price__gte=min_cost)

            if max_cost:
                products = products.filter(price__lte=max_cost)

            if sort_by == 'cheapest':
                products = products.order_by('price')
            elif sort_by == 'newest':
                products = products.order_by('created_at')
            elif sort_by == 'rating':
                products = products.order_by('-rating')

            total = products.count()
            products = products[cursor * limit : min( (cursor + 1) * limit, total )]
            logger.debug(f"Fetched products: {products}")

            response_data = {
                'products': ProductsSerializer(products, many=True).data,
                'meta_info': {
                    'can_fetch_next': (cursor + 1) * limit < total,
                    'total': total
                }
            }
            return Response(response_data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'code': 500, 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
