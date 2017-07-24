__author__ = 'slspeidel'
from django import template
from django.core.serializers import serialize
from django.db.models.query import QuerySet
import json as jsonlib
import time
import datetime
from functools import singledispatch

@singledispatch
def to_serializable(val):
    """Used by default."""
    return str(val)

@to_serializable.register(datetime)
def ts_datetime(val):
    """Used if *val* is an instance of datetime."""
    return val.isoformat() + "Z"

register = template.Library()

@register.filter(name='jsonify')
def jsonify(object):
    if isinstance(object, QuerySet):
        return serialize('json', object)
    return jsonlib.dumps(object, default=to_serializable)

#register.filter('jsonify', jsonify)

def default_serialize(obj):
    """JSON serializer for objects not serializable by default json code"""

    # if isinstance(obj, datetime.date):
    #     serial = obj.isoformat()
    #     return serial

    if isinstance(obj, time):
        serial = obj.isoformat()
        return serial

    return obj.__dict__