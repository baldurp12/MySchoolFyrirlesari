import requests, bs4

def test():
    res = requests.get('https://myschool.ru.is/myschool/?Page=LMS&ID=15&FagID=27936&MenuID=0&View=51&ViewMode=2')
    print(res.txt[:10000])

test()
