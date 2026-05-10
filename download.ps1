$jsonPath = "C:\Users\AJEY K\.gemini\antigravity\brain\1e174e79-e4c3-4f7f-99d5-d777b3a2dab0\.system_generated\steps\377\output.txt"
$outDir = "d:\odoo\Traveloop\stitch_code"
New-Item -ItemType Directory -Force -Path $outDir

$json = Get-Content $jsonPath -Raw | ConvertFrom-Json
foreach ($screen in $json.screens) {
    $title = $screen.title -replace " ", "_"
    $url = $screen.htmlCode.downloadUrl
    $outFile = "$outDir\$title.html"
    Write-Host "Downloading $title to $outFile"
    Invoke-WebRequest -Uri $url -OutFile $outFile
}
Write-Host "Done"
