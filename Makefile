install:
	@echo "Installing dependencies..."
	@docker run --rm -w /nest -v $$(pwd):/nest node:dubnium-alpine npm install
	@echo "Successfully install dependencies"

compile:
	@echo "Compiling..."
	@docker run --rm -w /nest -v $$(pwd):/nest node:dubnium-alpine npm run -s compile
	@echo "Successfully compile"