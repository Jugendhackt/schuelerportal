import cgi,cgitb
def menuhead(title):
	title = title + "- Hausaufgabenwebseite"
	print"""
		<head>
	    <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="../css/onlymenu.css">
		<link rel="stylesheet" href="../css/nohtmlinchat.css">
		<link rel="stylesheet" href="../css/chat.css">
	    <script src="../js/chat.js"></script>
		<link rel="stylesheet" href="../css/box.css">
		<link rel="stylesheet" href="../css/openclose.css">
		<link rel="help" href="/help/">
		<script src="../js/openclose.js"></script>
		<title>%s</title>
		</head>
		"""%title
def printmenu(tab):
	tabs=  ["","","","",""]
	tabs[int(tab)]="active"
	print """
	<div>
	<ul id="menu" class="sidenav">
	<li><a class="%s" href="index.py?tab=0">Home</a></li>
	<li><a class="%s" href="index.py?tab=1">Hausaufgaben</a></li>
	<li><a class="%s" href="index.py?tab=2">Stundenplan</a></li>
	<li><a class="%s" href="index.py?tab=3">Chat</a></li>
	<li><a class="%s" href="index.py?tab=4">Einstellungen</a></li>
	</ul>
	<a class="menuon"  id="menuon" onclick="menuon()">Menu</a>
	<a class="menuoff"  id="menuoff" onclick="menuoff()"><img width="20" class="" height="20" src="../other/Delte.png"></img></a>
	</div>
	"""%tuple(tabs)
