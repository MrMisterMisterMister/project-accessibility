# Check if the username is provided
if [ -z "$1" ]; then
  echo "Error: No username provided."
  echo "Usage: ./deployment.sh [username]"
  exit 1
fi

# Switch to the main branch
echo "Switching to main branch..."
git checkout main

deployUser=$1

echo "Building app.."
npm run build

echo "Deploying app.."
scp -r ./build/* "$deployUser"@142.93.135.187:/var/www/clodsire.nl/html

# requires ssh key
echo "Restarting Nginx on the server.."
ssh "$deployUser"@142.93.135.187 'sudo systemctl restart nginx'

echo "Deployment finished.."
