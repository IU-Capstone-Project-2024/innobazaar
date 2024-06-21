from django.db import models

class Vendors(models.Model):
    vendor_id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    address = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

class Contacts(models.Model):
    CONTACT_TYPE_CHOICES = [
        ('phone', 'Phone'),
        ('telegram', 'Telegram'),
    ]

    vendor = models.ForeignKey(Vendors, on_delete=models.CASCADE)
    type = models.CharField(max_length=50, choices=CONTACT_TYPE_CHOICES)
    value = models.TextField()

class Products(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    vendor = models.ForeignKey(Vendors, on_delete=models.CASCADE)
    name = models.TextField()
    description = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    price = models.BigIntegerField()
    quantity = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

class Categories(models.Model):
    CATEGORY_CHOICES = [
        ('all', 'All'),
        ('books', 'Books'),
        ('electronics', 'Electronics'),
        ('jewelry', 'Jewelry'),
        ('home', 'Home'),
        ('shoes', 'Shoes'),
        ('clothes', 'Clothes'),
        ('toys', 'Toys'),
    ]

    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)