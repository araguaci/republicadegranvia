#!/usr/bin/env python3
"""
Script para converter arquivos SVG para PNG otimizados para social media.
Requer: pip install pillow cairosvg
"""

import os
import sys
from pathlib import Path

try:
    import cairosvg
except ImportError:
    print("❌ cairosvg não está instalado.")
    print("Instale com: pip install cairosvg")
    sys.exit(1)

def convert_svg_to_png(svg_path, png_path, width=1200, height=630):
    """Converte SVG para PNG com dimensões específicas."""
    try:
        cairosvg.svg2png(
            url=str(svg_path),
            write_to=str(png_path),
            output_width=width,
            output_height=height
        )
        return True
    except Exception as e:
        print(f"❌ Erro ao converter {svg_path}: {e}")
        return False

def main():
    images_dir = Path('images')
    
    if not images_dir.exists():
        print(f"❌ Diretório {images_dir} não encontrado!")
        sys.exit(1)
    
    svg_files = sorted(images_dir.glob('og-*.svg'))
    
    if not svg_files:
        print("❌ Nenhum arquivo SVG encontrado em /images")
        sys.exit(1)
    
    print(f"📸 Convertendo {len(svg_files)} imagens SVG para PNG...\n")
    
    converted = 0
    for svg_file in svg_files:
        png_file = svg_file.with_suffix('.png')
        
        # Adiciona qualidade JPG
        if convert_svg_to_png(svg_file, png_file):
            file_size = png_file.stat().st_size / 1024  # KB
            print(f"✓ {png_file.name} ({file_size:.1f}KB)")
            converted += 1
        else:
            print(f"✗ {svg_file.name}")
    
    print(f"\n✅ {converted}/{len(svg_files)} imagens convertidas com sucesso!")
    print("\n📋 Imagens geradas:")
    
    for png_file in sorted(images_dir.glob('og-*.png')):
        size_kb = png_file.stat().st_size / 1024
        print(f"   • {png_file.name} ({size_kb:.1f}KB)")
    
    print("\n🚀 Próximo passo: Faça push das imagens para o repositório!")

if __name__ == '__main__':
    main()
