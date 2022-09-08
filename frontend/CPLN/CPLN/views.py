# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password


# Create your views here.



def registerUser(request):
	if request.methon == 'POST':
		name = request.POST['name']
		surname = request.POST['surname']
		password = request.POST['password']
		email = request.POST['email']
		tel = request.POST['tel']
		newUser(name=name, surname=surname, email=email, tel=tel).save()
		messages.success(request, 'The user'+ request.POST['name ' + 'surname']+ 'has been created')
		return render(request, 'CPLN/react-template/public/index.html')

	else:
		return render(request, 'CPLN/react-template/public/index.html')

def loginUser(request):
	if request.methon == 'POST':
		try:
			detailUser = newUser.objects.get(email=request.POST['email'], password=request.POST['password'])
			print('User', detailUser)
		except:
			pass