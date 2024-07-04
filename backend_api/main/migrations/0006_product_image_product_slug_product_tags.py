# Generated by Django 5.0.6 on 2024-07-02 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_productimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(null=True, upload_to='product_imgs/'),
        ),
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.TextField(max_length=300, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='product',
            name='tags',
            field=models.TextField(null=True),
        ),
    ]
