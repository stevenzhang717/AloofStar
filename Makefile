default:
	docker build -t steven:prod .
	docker run -d -p 8080:8080 steven:prod
