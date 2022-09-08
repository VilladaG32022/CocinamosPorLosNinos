from __future__ import unicode_literals

from django.contrib import admin
from .models import *
from django.apps import apps
# from django.contrib.auth.hashers import make_password, check_password
    
my_models = apps.get_models()

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("last_name", "first_name","age", "neighborhood","telephone","email","is_candidate")
    ordering = ("last_name",)
    search_fields = ("neighborhood","last_name")
    list_filter = ("neighborhood",)
    list_editable = ("is_candidate",)
    list_display_links = ("last_name",)
    list_per_page = 8
    #exclude = ("last_name", "first_name","age", "neighborhood","telephone","email")
    #list_select_related = ("id_neighborhood",)

# Register your models here.

for model in my_models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass