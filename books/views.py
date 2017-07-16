from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def booklist(request):
    return render(request, 'booklist.html')
    #return HttpResponse('<h1>Welcome to our store!</h1>')