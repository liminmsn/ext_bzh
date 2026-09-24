$source = "public/icon.png"
$sizes = @(16, 32, 48, 96, 128)

foreach ($size in $sizes) {
    $output = "public/icon/${size}.png"

    magick "$source" -resize "${size}x${size}" "$output"
}