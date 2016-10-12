from django.contrib import admin


from login.models import *

# class AuthorAdmin(admin.ModelAdmin):
#     list_display = ('first_name', 'last_name', 'email')
#     search_fields = ('first_name', 'last_name')

# class LoginAdmin(admin.ModelAdmin):
#     list_display = ('title', 'publisher', 'publication_date')
#     list_filter = ('publication_date',)
#     date_hierarchy = 'publication_date'
#     ordering = ('-publication_date',)
#     #fields = ('title', 'authors', 'publisher')
#     #filter_vertical = ('authors',)
#     filter_horizontal = ('authors',)
#     raw_id_fields = ('Users',)



admin.site.register(Users)
admin.site.register(Hospitals)
admin.site.register(user2)
admin.site.register(Link)

# admin.site.register(Author, AuthorAdmin)
# admin.site.register(Book, BookAdmin)
# Register your models here.
