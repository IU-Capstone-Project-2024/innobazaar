from django.shortcuts import render
from . import serializers
from . import models
from rest_framework import generics, permissions, pagination, viewsets

from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import json

class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class=serializers.VendorSerializer

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class=serializers.VendorDetailSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductListSerializer
    pagination_class=pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:  
            category = self.request.GET['category']
            category = models.ProductCategory.objects.get(id=category)
            qs = qs.filter(category=category)
        if 'fetch_limit' in self.request.GET:  
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs

class ProductImgsList(generics.ListCreateAPIView):
    queryset = models.ProductImage.objects.all()
    serializer_class=serializers.ProductImageSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class=serializers.ProductDetailSerializer


class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        customer = models.Customer.objects.get(user=user)
        msg = {
            'bool': True,
            'user': user.username,
            'user_id': customer.id,
        }
    else:
        msg = {
            'bool': False,
            'msg': "Invalid Credentials",
        }
    
    return JsonResponse(msg)

@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    telegram = request.POST.get('telegram')
    password = request.POST.get('password')
    try:
        user = User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
        )
        if user:
            try:
                customer = models.Customer.objects.create(
                    user=user,
                    mobile=mobile,
                    telegram=telegram,
                )
                msg = {
                    'bool': True,
                    'user': user.id,
                    'customer': customer.id,
                    'msg': 'Account registered successfully!', 
                }
            except IntegrityError:
                msg = {
                    'bool': False,
                    'msg': "Mobile already used!!",
                }

        else:
            msg = {
                'bool': False,
                'msg': "Something went wrong!!",
            }
    except IntegrityError:
        msg = {
            'bool': False,
            'msg': "Username already used!!",
        }
    
    
    return JsonResponse(msg)


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

class OrderDetail(generics.ListAPIView):
    serializer_class=serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items


class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.CustomerAddressSerializer
    queryset=models.CustomerAddress.objects.all()
    
    # def get_queryset(self):
    #     customer_id=self.kwargs['pk']
    #     order=models.Order.objects.get(id=order_id)
    #     order_items=models.OrderItems.objects.filter(order=order)
    #     return order_items

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ProductRatingSerializer
    queryset=models.ProductRating.objects.all()


class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class=serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class=serializers.CategoryDetailSerializer

class WishList(generics.ListCreateAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class=serializers.WishlistSerializer

@csrf_exempt
def check_in_wishlist(request):
    if request.method=='POST':
        product_id = request.POST.get('product')
        customer_id = request.POST.get('customer')
        print(product_id, customer_id)
        checkWishlist = models.Wishlist.objects.filter(product__id=product_id, customer__id=customer_id).count()
        msg={
            'bool': False,
        }

        if checkWishlist > 0:
            msg={
                'bool': True,
            }

    
    return JsonResponse(msg)

class WishItemList(generics.ListAPIView):
    queryset = models.Wishlist.objects.all()
    serializer_class = serializers.WishlistSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        customer_id = self.kwargs['pk']
        qs = qs.filter(customer__id=customer_id)
        return qs

@csrf_exempt
def remove_from_wishlist(request):
    if request.method=='POST':
        wishlist_id = request.POST.get('wishlist_id')
        res = models.Wishlist.objects.filter(id=wishlist_id).delete()
        print(wishlist_id)
        msg={
            'bool': False,
        }

        if res:
            msg={
                'bool': True,
            }

    
    return JsonResponse(msg)