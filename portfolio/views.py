from django.shortcuts import render
from portfolio.models import Item, Asset

def index(request):
    items = Item.objects.order_by("-publish_date")
    return render(request, 'index.html', {"items": items})

def contact(request):
    return render(request, 'index.html',)