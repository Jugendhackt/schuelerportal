# -*- coding: utf-8 -*-
from bauteile import userdata
data = userdata.addaccount("anton","test37137498")
if data == 0:
    text_me = "Erfolgreich"
elif data == 1:
    text_me = "Falscher Account"
elif data == 2:
    text_me = "Falsches Passwort"
elif data == 3:
    text_me = "Der Account ist nicht mehr verfügbar!"
else:
    text_me = "Undefined Error"
print text_me
