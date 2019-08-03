cname 		= "moh.page"
rep 		= "moh.page"


deploy:
    cp -rf ./dist ~/ws/.term/dist
    cp ~/ws/.conf/fr/just/dep ~/ws/.term/dist/
    mv ~/ws/.term/dist/dep ~/ws/.term/dist/justfile
    echo {{cname}} >> ~/ws/.term/dist/CNAME
    rm -rf ./dist
    (cd ~/ws/.term/dist && just deploy {{rep}})
    rm -rf ~/ws/.term/dist
