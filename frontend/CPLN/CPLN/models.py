# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Person2(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    dateOfBirth = models.DateField(null=True)
    email = models.EmailField(unique=True, max_length=50)
    address = models.CharField(max_length=50, default="Sin Direccion")
    telephone = models.IntegerField(max_length=20, null=True)
    postCode = models.IntegerField()

    def _str_(self):
        return str(self.firstName+ ' ' + self.lastName)

class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    dni = models.CharField(blank=True, max_length=20, null=True)
    email = models.CharField(unique=True, max_length=50)
    telephone = models.IntegerField(max_length=20)
    password = models.CharField(max_length=20, default='password')
    candidate = models.BooleanField(default=True)

    def __str__(self):
        return str(self.first_name+ ' ' + self.last_name)

class Direction(models.Model):
    person_id = models.ForeignKey(Person, on_delete = models.CASCADE)
    street = models.CharField(max_length=50, null=True)
    street_num = models.IntegerField(max_length=5, null=True)
    neighborhood = models.CharField(max_length=50)

class Role(models.Model):
    description = models.CharField(max_length = 50)

class Volunteer(models.Model):
    person_id = models.ForeignKey(Person, on_delete = models.CASCADE)
    role_id = models.ForeignKey(Role, on_delete = models.CASCADE)

class CandidateToVolunteer(models.Model):
    person_id = models.ForeignKey(Person, on_delete = models.CASCADE)
    role_id = models.ForeignKey(Role, on_delete = models.CASCADE)

class UserPage(models.Model):
    username = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=100)
    person_id = models.ForeignKey(Person, on_delete = models.CASCADE)

class Product(models.Model):
    description = models.CharField(max_length=255)
    brand = models.CharField(max_length=50)

    def __str__(self):
        return str(self.description)

class Donation(models.Model):
    date = models.DateField()
    amount = models.IntegerField(blank=True)
    person_id = models.ForeignKey(Person, on_delete = models.CASCADE)

class ProductDonation(models.Model):
    donation_id = models.ForeignKey(Donation, on_delete = models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)
    quantity = models.IntegerField()
    expiration_date = models.DateField(blank=True)