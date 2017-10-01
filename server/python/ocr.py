# -*- coding: utf-8 -*-
import sys
bild = sys.argv[1:]
bild = ''.join(bild)
mode = "picture"
import pytesseract
if ".pdf" in bild:
    mode = "pdf"
if mode == "picture":
    try:
        import Image
    except ImportError:
        from PIL import Image
    pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract.exe'
    output = pytesseract.image_to_string(Image.open(bild),lang='deu')
elif mode == "pdf":
    from wand.image import Image
    from wand.color import Color

    with Image(filename=bild, resolution=300) as img:
      with Image(width=img.width, height=img.height, background=Color("white")) as bg:
        bg.composite(img,0,0)
        bg.save(filename="image.png")
    try:
        import Image
    except ImportError:
        from PIL import Image
    output = pytesseract.image_to_string(Image.open("image.png"),lang='deu')

print output
