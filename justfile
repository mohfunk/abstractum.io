cname 		= "www.abstractum.io"
rep 		= "abstractum.io"

postdir 	= "./src/views/posts/"
projdir 	= "./src/views/proj/"
gamedir 	= "./src/views/games/"
rpostdir 	= "./views/posts/"
rprojdir 	= "./views/proj/"
rgamedir 	= "./views/games/"
jpostdir 	= "./src/assets/json/blog.json"
jprojdir 	= "./src/assets/json/proj.json"
jgamedir 	= "./src/assets/json/game.json"
rter 		= "./src/router.ts"
mdpt 		= "./src/components/mdown.vue"
mdir 		= "@/assets/md/"
date 		= `date | sed -n '1p'|awk '{print $3" "$4}'`
deploy:
    yarn run build
    cp -rf ./dist ~/ws/.term/dist
    cp ~/ws/.conf/fr/just/dep ~/ws/.term/dist/
    mv ~/ws/.term/dist/dep ~/ws/.term/dist/justfile
    echo {{cname}} >> ~/ws/.term/dist/CNAME
    rm -rf ./dist
    (cd ~/ws/.term/dist && just deploy {{rep}})
    rm -rf ~/ws/.term/dist

@post file id='100' title='title':
	cp ~/ws/.conf/fr/vue/post.vue {{postdir}}
	mv {{postdir}}post.vue {{postdir}}{{file}}.vue
	sed -i '' "s/{{ "{{" }}name}}/{{file}}/g" {{postdir}}{{file}}.vue
	echo "{{file}}.vue created"
	gsed -i '/^\/\/posts.imp$/ s:$:\nimport\ {{file}}\ from\ \"{{rpostdir}}{{file}}.vue\"\;:' {{rter}} 
	gsed -i '/^\/\/posts.path$/ s:$:\n\{\ path\: \"\/{{file}}\"\,\  name\: \"{{file}}\"\,\ component\:\ {{file}}\ }\,:' {{rter}} 
	echo "{{file}} route created"
	gsed -i '/^\/\/mdsrc$/ s:$:\nimport\ {{file}}\ from\ \"{{mdir}}{{file}}.md\"\;:' {{mdpt}} 
	gsed -i '/^\/\/mdcomp$/ s:$:\n{{file}}\,:' {{mdpt}} 
	echo "{{file}}.md route sourced"
	touch ./src/assets/md/{{file}}.md
	gsed -i '/^\[$/ s:$:\n\{\ \"id\"\:\ \"{{file}}\"\,\ \"date\"\:\ \"\{{date}}\", \"t\"\:\ \"{{title}}\"\,\ \"to\"\:\ \"{{file}}\"\ \}\,:' {{jpostdir}}
	echo "{{file}} page attached"
	echo "# New Post" > ./src/assets/md/{{file}}.md


@game file id='100' title='title':
	cp ~/ws/.conf/fr/vue/post.vue {{gamedir}}
	echo "{{file}}.vue created"
	mv {{gamedir}}post.vue {{gamedir}}{{file}}.vue
	sed -i '' "s/{{ "{{" }}name}}/{{file}}/g" {{gamedir}}{{file}}.vue
	gsed -i '/^\/\/games.imp$/ s:$:\nimport\ {{file}}\ from\ \"{{rgamedir}}{{file}}.vue\"\;:' {{rter}} 
	echo "{{file}} route created"
	gsed -i '/^\/\/games.path$/ s:$:\n\{\ path\: \"\/{{file}}\"\,\  name\: \"{{file}}\"\,\ component\:\ {{file}}\ }\,:' {{rter}} 
	gsed -i '/^\/\/mdsrc$/ s:$:\nimport\ {{file}}\ from\ \"{{mdir}}{{file}}.md\"\;:' {{mdpt}} 
	gsed -i '/^\/\/mdcomp$/ s:$:\n{{file}}\,:' {{mdpt}} 
	echo "{{file}}.md route sourced"
	touch ./src/assets/md/{{file}}.md
	gsed -i '/^\[$/ s:$:\n\{\ \"id\"\:\ \"{{file}}\"\,\ \"date\"\:\ \"\{{date}}\", \"t\"\:\ \"{{title}}\"\,\ \"to\"\:\ \"{{file}}\"\ \}\,:' {{jgamedir}}
	echo "{{file}} page attached"
	echo "# New Post" > ./src/assets/md/{{file}}.md

@proj file id='100' title='title':
	cp ~/ws/.conf/fr/vue/post.vue {{projdir}}
	mv {{projdir}}post.vue {{projdir}}{{file}}.vue
	echo "{{file}}.vue created"
	sed -i '' "s/{{ "{{" }}name}}/{{file}}/g" {{projdir}}{{file}}.vue
	gsed -i '/^\/\/projs.imp$/ s:$:\nimport\ {{file}}\ from\ \"{{rprojdir}}{{file}}.vue\"\;:' {{rter}} 
	gsed -i '/^\/\/projs.path$/ s:$:\n\{\ path\: \"\/{{file}}\"\,\  name\: \"{{file}}\"\,\ component\:\ {{file}}\ }\,:' {{rter}} 
	echo "{{file}} route created"
	gsed -i '/^\/\/mdsrc$/ s:$:\nimport\ {{file}}\ from\ \"{{mdir}}{{file}}.md\"\;:' {{mdpt}} 
	gsed -i '/^\/\/mdcomp$/ s:$:\n{{file}}\,:' {{mdpt}} 
	echo "{{file}}.md route sourced"
	touch ./src/assets/md/{{file}}.md
	gsed -i '/^\[$/ s:$:\n\{\ \"id\"\:\ \"{{file}}\"\,\ \"date\"\:\ \"\{{date}}\", \"t\"\:\ \"{{title}}\"\,\ \"to\"\:\ \"{{file}}\"\ \}\,:' {{jprojdir}}
	echo "{{file}} page attached"
	echo "# New Post" > ./src/assets/md/{{file}}.md
