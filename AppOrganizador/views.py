from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
	return render(request, "Organizador/home.html")

def python(request):
	return render(request, "Organizador/python.html")

def django(request):
	return render(request, "Organizador/django.html")

def javascript(request):
	return render(request, "Organizador/javascript.html")

def css(request):
	return render(request, "Organizador/css.html")	
