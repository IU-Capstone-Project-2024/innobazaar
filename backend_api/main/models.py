from django.db import models
from django.contrib.auth.models import User

# Vendor
class Vendor(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    address=models.TextField(null=True)

    def __str__(self):
        return self.user.username

# Category
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    image=models.ImageField(upload_to='product_imgs/', null=True)


    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural='Product Categories'
    
# Customer
class Customer(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    mobile=models.PositiveBigIntegerField(unique=True)
    telegram=models.TextField(max_length=32)

    def __str__(self):
        return self.user.username
    
# Product
class Product(models.Model):
    category=models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True,
                               related_name='category_products')
    vendor=models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    customer=models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    title=models.CharField(max_length=200)
    slug=models.TextField(max_length=300, unique=True, null=True)
    detail=models.TextField(null=True)
    price=models.FloatField()
    tags=models.TextField(null=True)
    image=models.ImageField(upload_to='product_imgs/', null=True)
    publish_status=models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    def tag_list(self):
        print(self.image.url)
        if self.tags:
            tagList=self.tags.split(',')
            return tagList
        return []
    
    def customerr_id(self):
        if self.customer:
            return self.customer.id
        return -1

# Order
class Order(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_orders')
    order_time=models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % (self.order_time)

# Order Items
class OrderItems(models.Model):
    order=models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product=models.ForeignKey(Product, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.product.title
    
    class Meta:
        verbose_name_plural='Order Items'

# Customer Address
class CustomerAddress(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='addresses')
    address=models.TextField()
    default_address=models.BooleanField(default=False)
    
    def __str__(self):
        return self.address
    
    class Meta:
        verbose_name_plural='Customer Addresses'
    
# Product Rating and Reviews
class ProductRating(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='rating_customers')
    product=models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'

# Product Images
class ProductImage(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_imgs')
    image=models.ImageField(upload_to='product_imgs/', null=True)
    
    def __str__(self):
        return self.image.url

# Wishlist
class Wishlist(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE)
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural='Wish List'

    def __str__(self):
        return f"{self.product.title} - {self.customer.user.first_name}"
    
    def get_product_image(self):
        print(self.product.image)
        return self.product.image.url