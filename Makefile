dev-dockerfile := -f docker-compose.yml -f docker-compose.dev.yml
prod-dockerfile := -f docker-compose.yml -f docker-compose.prod.yml

build-dev:
	docker-compose $(dev-dockerfile) build --no-cache

dev:
	docker-compose $(dev-dockerfile) up $(variadic_args)