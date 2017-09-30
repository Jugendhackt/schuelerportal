import sys
bild = sys.argv[1:]
bild = ''.join(bild)
try:
    import Image
except ImportError:
    from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'

print pytesseract.image_to_string(Image.open(bild),lang='deu')
