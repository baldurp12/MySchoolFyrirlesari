import requests, bs4, pprint
from requests_toolbelt.downloadutils import stream

def video_grabber():

    res  = open("fyrirlestrar.html")
    soup = bs4.BeautifulSoup(res, "html.parser")
    row1 = soup.find_all("tr", class_ = "ruTableRow1")
    row2 = soup.find_all("tr", class_ = "ruTableRow2")
##    all_rows = soup.find_all("tr", {'class': ['ruTableRow1', 'ruTablerow2"']})
    all_rows = row1 + row2

    
##    for tr in all_rows:
##        for col in tr.select("td > a"):
##            if col.has_attr('href') and 'youtu' in col['href']:
##                print(col['href'])

##    for tr in all_rows:
##        for col in tr.find("td", {'align':'left', 'title':''}):
##            print(col)

    collection = {}
    for elem in all_rows:
        for col in elem.select("td > a"):
            if col.has_attr('href') and 'youtu' in col['href']:
                link = col['href']
            else:
                link = ''
        try:
            title = elem.find("td", {'align':'left', 'title':''}).get_text()
        except:
            title = ''
        collection[title] = link

    file =  open('fyrirlestrar.txt', 'w')
    for item in sorted(collection):
        file.write('<a href="' + collection[item] + '"target="_blank">' + item + '</a>\n')











//video_grabber()
