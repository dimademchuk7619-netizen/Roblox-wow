#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Roblox Trading Platform...${NC}\n"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker Compose is not installed. Please install Docker Compose first.${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Building and starting services...${NC}\n"

# Start services
docker-compose up -d

# Wait for services to start
echo -e "${YELLOW}⏳ Waiting for services to start...${NC}"
sleep 5

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    echo -e "\n${GREEN}✅ Services started successfully!${NC}\n"
    
    echo -e "${BLUE}📍 Available URLs:${NC}"
    echo -e "  🎮 Frontend:  ${GREEN}http://localhost:5173${NC}"
    echo -e "  🔧 Backend:   ${GREEN}http://localhost:5000${NC}"
    echo -e "  🗄️  MongoDB:   ${GREEN}mongodb://localhost:27017${NC}\n"
    
    echo -e "${BLUE}📝 Default API Endpoints:${NC}"
    echo -e "  🔐 Register:  POST http://localhost:5000/api/auth/register"
    echo -e "  🔓 Login:     POST http://localhost:5000/api/auth/login"
    echo -e "  📦 Items:     GET  http://localhost:5000/api/items\n"
    
    echo -e "${BLUE}🛑 To stop services, run:${NC}"
    echo -e "  ${YELLOW}docker-compose down${NC}\n"
    
    echo -e "${GREEN}✨ Happy coding!${NC}\n"
else
    echo -e "${YELLOW}⚠️  Some services failed to start. Check logs:${NC}"
    docker-compose logs
    exit 1
fi
