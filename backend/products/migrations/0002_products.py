from django.db import migrations, models
import random

def create_initial_data(apps, schema_editor):
    Vendor = apps.get_model('products', 'Vendors')
    Contacts = apps.get_model('products', 'Contacts')
    Product = apps.get_model('products', 'Products')
    Categories = apps.get_model('products', 'Categories')

    # Create Vendors
    vendor1 = Vendor.objects.create(name="Vendor 1", address="Address 1", rating=4.5)
    vendor2 = Vendor.objects.create(name="Vendor 2", address="Address 2", rating=3.8)

    # Create Contacts
    Contacts.objects.create(vendor=vendor1, type="phone", value="1234567890")
    Contacts.objects.create(vendor=vendor1, type="telegram", value="@vendor1")
    Contacts.objects.create(vendor=vendor2, type="phone", value="0987654321")

    # Categories list
    categories_list = ['electronics', 'books', 'toys']

    # Create Products and Categories
    for i in range(1, 51):
        vendor = random.choice([vendor1, vendor2])
        product = Product.objects.create(
            vendor=vendor,
            name=f"Product {i}",
            description=f"Description for product {i}",
            rating=round(random.uniform(1.0, 5.0), 1),
            quantity=random.randint(1, 100),
            price=round(random.uniform(10.0, 1000.0), 2)
        )
        category = random.choice(categories_list)
        Categories.objects.create(product=product, category=category)

class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),  # Ensure this matches the initial migration name
    ]

    operations = [
        migrations.RunPython(create_initial_data),
    ]