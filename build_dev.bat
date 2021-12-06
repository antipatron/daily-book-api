@echo off
rmdir C:\Users\juang\OneDrive\Documents\prueba-jenkins\pipeline-qa-daily /s /q
cd ..
xcopy pipeline-qa-daily3 C:\Users\juang\OneDrive\Documents\prueba-jenkins\pipeline-qa-daily /e /i
cd C:\Users\juang\OneDrive\Documents\prueba-jenkins\pipeline-qa-daily
npm install
npm run build
nest start
echo Foo
pause
exit