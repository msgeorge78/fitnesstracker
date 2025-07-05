# 🖥️ Terminal Commands to Upload Your Meditation Video

## Option 1: Using PowerShell (Windows - Recommended)

Open PowerShell and run these commands:

```powershell
# Navigate to your project directory (replace with your actual path)
cd "C:\path\to\your\project"

# Create the videos directory if it doesn't exist
mkdir -p public\videos

# Copy your video file to the project
copy "C:\Users\nitin\Downloads\mindfulness.mp4" "public\videos\meditation-video.mp4"

# Verify the file was copied
dir public\videos
```

## Option 2: Using Command Prompt (Windows)

```cmd
# Navigate to your project directory
cd /d "C:\path\to\your\project"

# Create videos directory
mkdir public\videos

# Copy the file
copy "C:\Users\nitin\Downloads\mindfulness.mp4" "public\videos\meditation-video.mp4"

# List files to verify
dir public\videos
```

## Option 3: Using Git Bash (if you have Git installed)

```bash
# Navigate to project directory
cd /c/path/to/your/project

# Create videos directory
mkdir -p public/videos

# Copy the file
cp "/c/Users/nitin/Downloads/mindfulness.mp4" "public/videos/meditation-video.mp4"

# Verify
ls -la public/videos/
```

## Option 4: One-liner PowerShell Command

```powershell
Copy-Item "C:\Users\nitin\Downloads\mindfulness.mp4" -Destination ".\public\videos\meditation-video.mp4" -Force
```

## 🔍 Find Your Project Directory

If you're not sure where your project is located, use:

```powershell
# Find current directory
pwd

# Or if you need to find the project
Get-ChildItem -Path C:\ -Name "*fitness*" -Recurse -Directory
```

## ✅ Verify Upload Success

After copying, verify with:

```powershell
# Check if file exists
Test-Path "public\videos\meditation-video.mp4"

# Get file info
Get-Item "public\videos\meditation-video.mp4" | Select-Object Name, Length, LastWriteTime
```

## 🚀 Quick Test Commands

```powershell
# Check file size (should be reasonable for web)
(Get-Item "public\videos\meditation-video.mp4").Length / 1MB

# List all files in videos directory
Get-ChildItem "public\videos\" -Name
```