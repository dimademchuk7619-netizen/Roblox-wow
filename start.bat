@echo off
REM Windows startup script for Roblox Trading Platform

echo.
echo ========================================
echo  Roblox Trading Platform - Docker Start
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not installed or not in PATH
    echo Please install Docker Desktop from https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker Compose is not installed
    echo Please install Docker Desktop which includes Docker Compose
    pause
    exit /b 1
)

echo [*] Building and starting services...
echo.

REM Start services
docker-compose up -d

REM Wait for services
echo [*] Waiting for services to start...
timeout /t 5 /nobreak

echo.
echo ========================================
echo  Services Started Successfully!
echo ========================================
echo.
echo Frontend:  http://localhost:5173
echo Backend:   http://localhost:5000
echo MongoDB:   mongodb://localhost:27017
echo.
echo To stop services, run:
echo   docker-compose down
echo.
pause
