cname = "www.abstractum.io"
rep = "abstractum.io"
pdir = "./src/views/posts/"
pdi = "./views/posts/"
mdir = "@/assets/md/"
jdir = "./src/assets/json/blog.json"
rter = "./src/router.ts"
mdpt = "./src/components/mdown.vue"
deploy:
    yarn run build
    cp -rf ./dist ~/ws/.term/dist
    cp ~/ws/.conf/fr/just/dep ~/ws/.term/dist/
    mv ~/ws/.term/dist/dep ~/ws/.term/dist/justfile
    echo {{cname}} >> ~/ws/.term/dist/CNAME
    rm -rf ./dist
    (cd ~/ws/.term/dist && just deploy {{rep}})
    rm -rf ~/ws/.term/dist
post file id='100' date='TBD 20XX' title='title':
	cp ~/ws/.conf/fr/vue/post.vue {{pdir}}
	mv {{pdir}}post.vue {{pdir}}{{file}}.vue
	sed -i '' "s/{{ "{{" }}name}}/{{file}}/g" {{pdir}}{{file}}.vue
	gsed -i '/^\/\/posts.imp$/ s:$:\nimport\ {{file}}\ from\ \"{{pdi}}{{file}}.vue\"\;:' {{rter}} 
	gsed -i '/^\/\/posts.path$/ s:$:\n\{\ path\: \"\/{{file}}\"\,\  name\: \"{{file}}\"\,\ component\:\ {{file}}\ }\,:' {{rter}} 
	gsed -i '/^\/\/mdsrc$/ s:$:\nimport\ {{file}}\ from\ \"{{mdir}}{{file}}.md\"\;:' {{mdpt}} 
	gsed -i '/^\/\/mdcomp$/ s:$:\n{{file}}\,:' {{mdpt}} 
	touch ./src/assets/md/{{file}}.md
	gsed -i '/^\[$/ s:$:\n\{\ \"id\"\:\ \"{{file}}\"\,\ \"date\"\:\ \"\{{date}}\", \"t\"\:\ \"{{title}}\"\,\ \"to\"\:\ \"{{file}}\"\ \}\,:' {{jdir}}
	echo "# New Post" > ./src/assets/md/{{file}}.md
date:
	echo 

