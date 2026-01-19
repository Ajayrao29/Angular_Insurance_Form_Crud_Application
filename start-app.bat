@echo off
cd /d "c:\Users\AJAY LINGAMPALLI\OneDrive\Documents\ins-app"
echo Starting Insurance Management Application...
echo.
echo Starting JSON Server on port 3001...
start "JSON Server" cmd /k json-server db.json --port 3001
timeout /t 3 /nobreak
echo.
echo Starting Angular Dev Server on port 4200...
start "Angular Dev Server" cmd /k npm start
echo.
echo Waiting for servers to initialize...
timeout /t 10 /nobreak
echo.
echo Opening application in browser...
start http://localhost:4200
pause
