from .templatetags import jsonify
from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
import json
from django.views import View
from django.core import serializers


# Create your views here.
# class booklist(View):
#     def get(self, request):
#         # gets passed to react via window.props
#         template = 'booklist.html'
#         component = 'booklist.js'
#         count = Book.objects.all().count()
#         props = {
#             'values': [{'count': count}]
#         };
#
#         context = {'title': 'Django Book Store', 'props': props}
#
#         render(request, template, context)

def booklist(request):
    template = 'booklist.html'
    # make a list of the books
    stock_queryset = Book.objects.all()
    data = serializers.serialize('json', list(stock_queryset), fields=('title','author'))
    stock_list = list(stock_queryset)

    # count the number of books in stock
    count = stock_queryset.count()

    assert isinstance(count, object)
    context = {'title': 'Django Book Store', 'stock': stock_list, 'count': count}

    return render(request, template, context)
