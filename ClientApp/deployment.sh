# Check if the username is provided
if [ -z "$1" ]; then
  echo "Error: No username provided."
  echo "Usage: ./deployment.sh [username]"
  exit 1
fi

# Switch to the main branch
echo "Switching to main branch..."
git checkout main

echo "Building app..."
npm run build

deployUser=$1

echo "Deploying app..."
# Copy the built files to the remote server using SSH
scp -r ./build/* "$deployUser"@142.93.135.187:/var/www/clodsire.nl/html

# Restart Nginx on the server using SSH
echo "Restarting Nginx on the server..."
ssh "$deployUser"@142.93.135.187 'sudo systemctl restart nginx'

echo "Deployment finished..."
