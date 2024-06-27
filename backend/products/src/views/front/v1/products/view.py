from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from products.src.models.models import *
from products.src.components.serializers import *

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

            print(data.get('category'), limit, min_cost, max_cost)

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
