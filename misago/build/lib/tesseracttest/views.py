from django.shortcuts import render
from django.http import HttpResponse
import os

from tesserwrap import Tesseract
from PIL import Image
from wand.image import Image as dog

def index(request):
    #from tesserwrap import Tesseract
    #from PIL import Image
    img = Image.open("/home/df/projects/django/nuspyp/tesseracttest/test.png");
    tr = Tesseract();
    tr.ocr_image(img);

    img2 = dog(filename='/home/df/projects/django/nuspyp/tesseracttest/source.pdf');
    single_image = img2.sequence[0];
    tr.ocr_image(single_image);

    return HttpResponse(tr.get_text());
    #return HttpResponse(tr.get_text());
    #dir_path = os.path.dirname(os.path.realpath(__file__))
    #return HttpResponse(dir_path);
# Create your views here.
