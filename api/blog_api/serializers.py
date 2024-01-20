from rest_framework import serializers

from blog.models import Post


class PostReadSerializer(serializers.ListSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content']
