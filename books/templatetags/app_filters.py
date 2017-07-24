from django import template
from django.utils.safestring import mark_safe
import json as jsonlib


import bleach

register = template.Library()

@register.filter(name='json_filter')
def json_filter(value):
    """safe jsonify filter, bleaches the json string using the bleach html tag remover"""
    uncleaned = jsonlib.dumps(value)
    clean = bleach.clean(uncleaned)
    return mark_safe(clean)

