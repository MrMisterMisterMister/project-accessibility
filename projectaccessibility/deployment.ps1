param (
    [Parameter(Mandatory=$true)]
    [string]$deployUser
)

Write-Host "building app ..."
npm run build

Write-Host "deploying app ..."
scp -r .\dist\* ${deployUser}@142.93.135.187:/var/www/clodsire.nl/html

Write-Host "Restarting Nginx on the server, requires SSSH key ..."
ssh ${deployUser}@142.93.135.187 'sudo systemctl restart nginx'

Write-Host "Done"