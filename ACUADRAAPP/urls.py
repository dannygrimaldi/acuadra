from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from cuadre.views import FormView,get_csrf_token, SelectItemsDDA
from django.urls import path



urlpatterns = [
    path('admin/', admin.site.urls),
    #path('set/tdd', get_csrf_token, name='get_csrf_token'),
    # Define la URL para la vista basada en clases FormView
    path('Selectdatatdd', SelectItemsDDA.as_view()),
    path('tdd', FormView.as_view()),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]