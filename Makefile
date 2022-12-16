# Inicia o docker
docker:
	sudo rm tmp/pids/server.pid -f
	sudo docker-compose up --remove-orphans

# Inicia o console no container docker
bash:
	sudo docker exec -it knowledge_app bash