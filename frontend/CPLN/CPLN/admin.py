# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *
# from django.contrib.auth.hashers import make_password, check_password
    


# Register your models here.
admin.site.register(Product,)
admin.site.register(ProductDonation,)
admin.site.register(Donation,)
admin.site.register(UserPage,)
admin.site.register(Person,)
admin.site.register(Person2,)
