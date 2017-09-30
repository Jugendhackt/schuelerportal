import userdata,random
def Createcookies():
    run = True
    file = open("./other/cookies.dat","r")
    while run:
        string = ""
        for _ in range(0,25):
            string = string + random.choice("1qay2wsx3edc4rfv5tgb6zhn7ujm8ikk9ol0pQAYWSXEDCRFVTGBZHNUJMIKOLP")
        return string
        for line in file:
            if sting+":" in line:
                run = True
            else:
                run = False
    file.close
def check(cookie):
    file = open("./other/cookies.dat","r")
    found = 0
    for line in file:
        line = line.join(line.split())
        if cookie + ":" in line:
            found = 1
            if line != cookie + ":":
                line = line.replace(cookie + ":","")
                found = 2
                username = line
    if 0 == found:
        return found
    if 1 == found:
        return found
    if 2 == found:
        return username
    file.close
test = Createcookies()
print test
