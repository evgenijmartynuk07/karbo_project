from rest_framework import viewsets, mixins

from api.blog_api.serializers import PostReadSerializer
from blog.models import Post


class PostViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = PostReadSerializer
    queryset = Post.objects.all()
