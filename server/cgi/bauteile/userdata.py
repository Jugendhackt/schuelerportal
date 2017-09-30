import hashlib
def checkaccount(username,passwd):
    passwd = hashlib.sha224(passwd).hexdigest()
    file = open("./other/accounts.dat","r")
    found = 1
    for line in file:
        if username+":" in line:
            found = 2
            if line == username+":"+passwd+"\n":
                found = 0
    if 0 == found:
        return found
    if 1 == found:
        return found
    if 2 == found:
        return found

    file.close
def addaccount(username,passwd,oldpasswd=False):
    check = checkaccount(username,passwd)
    passwd = hashlib.sha224(passwd).hexdigest()
    if 1 == check:
        file = open("./other/accounts.dat","a")
        file.write(username+":"+passwd+"\n  ")
        return 0
    else:
        return 3
