from django.db import models

# Create your models here.

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.


class Address(models.Model):
    #id_addres = models.IntegerField(unique=True, null=False, blank=False)
    street_1 = models.CharField(max_length=255, blank=True, null=True)
    street_2 = models.CharField(max_length=255, blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    tower = models.CharField(max_length=255, blank=True, null=True)
    department = models.CharField(max_length=20, blank=True, null=True)
    observations = models.CharField(max_length=255, blank=True, null=True)
    neighborhood = models.ForeignKey('Neighborhood', on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.street_1 + ' ' + self.number)


class Attendance(models.Model):
    presence = models.IntegerField(blank=True, null=True)
    volunteer = models.ForeignKey('Volunteer', on_delete=models.CASCADE)
    lunchroom = models.ForeignKey('Lunchroom', on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)


class Donation(models.Model):
    name_donator = models.CharField(max_length=40, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    amount = models.IntegerField(blank=True, null=True)
    last_update = models.DateTimeField(auto_now_add=True)


class Ingredients(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    lunch = models.ForeignKey('Lunch', on_delete=models.CASCADE)
    product_quantity = models.IntegerField(blank=True, null=True)
    amount_food_cooked = models.IntegerField(blank=True, null=True)
    last_update = models.DateTimeField(auto_now_add=True)


class Inventory(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    warehouse = models.ForeignKey('Warehouse', on_delete=models.CASCADE)
    product_quantity = models.IntegerField(blank=True, null=True)
    last_update = models.DateTimeField(auto_now_add=True)


class Lunch(models.Model):
    description = models.CharField(unique=True, max_length=255)
    last_update = models.DateTimeField(auto_now_add=True)


class Lunchroom(models.Model):
    name = models.CharField(max_length=100)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    warehouse = models.ForeignKey('Warehouse', on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)


class Neighborhood(models.Model):
    neighborhood = models.CharField(max_length=255)
    last_update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.neighborhood)


class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    age = models.IntegerField()
    neighborhood = models.ForeignKey(Neighborhood, on_delete=models.CASCADE)
    is_candidate = models.BooleanField(default=True)

    def __str__(self):
        return str(self.first_name + ' ' + self.last_name)


class Product(models.Model):
    description = models.CharField(max_length=255)
    brand = models.CharField(max_length=100)
    last_update = models.DateTimeField(auto_now_add=True)


class ProductDetail(models.Model):
    iproduct = models.ForeignKey(Product, on_delete=models.CASCADE)
    donation = models.ForeignKey(Donation, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=255)
    last_update = models.DateTimeField(auto_now_add=True)


class Role(models.Model):
    description = models.CharField(max_length=50)
    last_update = models.DateTimeField(auto_now_add=True)


class Userpage(models.Model):
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)


class Volunteer(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    lunchroom = models.ForeignKey(Lunchroom, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)


class Warehouse(models.Model):
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    name = models.CharField(max_length=60, blank=True, null=True)
    last_update = models.DateTimeField(auto_now_add=True)


class WeeklyMenu(models.Model):
    variety = models.CharField(max_length=50, blank=True, null=True)
    lunch = models.ForeignKey(Lunch, on_delete=models.CASCADE)
    lunchroom = models.ForeignKey(Lunchroom, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)


class Withdrawal(models.Model):
    freight = models.IntegerField(blank=True, null=True)
    volunteer = models.ForeignKey(Volunteer, on_delete=models.CASCADE)
    inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now_add=True)
