from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("he;llo");
# Create your views here.
