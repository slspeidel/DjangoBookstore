from django.conf.urls import include, url
from django.contrib import admin
import books

urlpatterns = [
    # Examples:
    # url(r'^$', 'DjangoBookstore.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^books/', include('books.urls'), name='books'),
    url(r'^admin/', include(admin.site.urls)),
]
