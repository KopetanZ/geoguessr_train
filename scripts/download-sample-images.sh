#!/bin/bash

# Sample image download script
# Downloads Creative Commons / Public Domain images for demo purposes

echo "🖼️  Downloading sample images for Geoguesser Training App..."

# Create directories if they don't exist
mkdir -p public/images/{road-signs,architecture,nature,infrastructure}

# Function to download with fallback
download_image() {
    local url="$1"
    local output="$2"
    local description="$3"
    
    echo "Downloading: $description"
    curl -L --fail --silent --show-error -o "$output" "$url" || {
        echo "⚠️  Failed to download: $description"
        echo "📝 Please manually add image: $output"
    }
}

# Road Signs (using placeholder images from Lorem Picsum with specific seeds for consistency)
download_image "https://picsum.photos/seed/stop-sign/400/300" "public/images/road-signs/stop-octagonal.jpg" "Stop Sign"
download_image "https://picsum.photos/seed/yield-sign/400/300" "public/images/road-signs/yield-triangular.jpg" "Yield Sign"  
download_image "https://picsum.photos/seed/speed-limit/400/300" "public/images/road-signs/speed-limit-circular.jpg" "Speed Limit Sign"

# Architecture
download_image "https://picsum.photos/seed/pagoda/400/300" "public/images/architecture/pagoda.jpg" "Pagoda Architecture"
download_image "https://picsum.photos/seed/tudor/400/300" "public/images/architecture/tudor-house.jpg" "Tudor House"
download_image "https://picsum.photos/seed/colonial/400/300" "public/images/architecture/colonial.jpg" "Colonial Architecture"

# Nature
download_image "https://picsum.photos/seed/eucalyptus/400/300" "public/images/nature/eucalyptus.jpg" "Eucalyptus Forest"
download_image "https://picsum.photos/seed/birch/400/300" "public/images/nature/birch-forest.jpg" "Birch Forest"
download_image "https://picsum.photos/seed/palm/400/300" "public/images/nature/palm-trees.jpg" "Palm Trees"

# Infrastructure  
download_image "https://picsum.photos/seed/bollard/400/300" "public/images/infrastructure/bollard-metal.jpg" "Metal Bollard"
download_image "https://picsum.photos/seed/utility/400/300" "public/images/infrastructure/utility-pole-concrete.jpg" "Utility Pole"
download_image "https://picsum.photos/seed/mailbox/400/300" "public/images/infrastructure/mailbox-red.jpg" "Red Mailbox"

echo ""
echo "✅ Sample image download complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review downloaded images in public/images/"
echo "2. Replace with actual relevant images if needed"
echo "3. Ensure all images are properly licensed"
echo "4. Test the app: npm run dev"
echo ""
echo "⚠️  Note: These are placeholder images for development."
echo "   For production, use actual relevant images with proper licensing."