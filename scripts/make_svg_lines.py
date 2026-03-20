import cv2
import numpy as np

def generate_svg_path(image_path, output_svg_path, size=400):
    img = cv2.imread(image_path)
    if img is None:
        return
        
    h, w = img.shape[:2]
    scale = min(size/w, size/h)
    new_w, new_h = int(w * scale), int(h * scale)
    resized = cv2.resize(img, (new_w, new_h))
    
    offset_x = (size - new_w) // 2
    offset_y = (size - new_h) // 2
    
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
    blur = cv2.bilateralFilter(gray, 9, 75, 75)
    edges = cv2.Canny(blur, 30, 100)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1,1))
    edges = cv2.morphologyEx(edges, cv2.MORPH_OPEN, kernel)
    
    # Save outline_transparent.png as requested by user
    outline = cv2.bitwise_not(edges)
    rgba = cv2.cvtColor(outline, cv2.COLOR_GRAY2BGRA)
    rgba[np.where((rgba == [0,0,0,255]).all(axis=2))] = [0,0,0,0]
    cv2.imwrite('public/outline_transparent.png', rgba)

    # Convert directly to SVG so we don't need external picsvg.com
    contours, hierarchy = cv2.findContours(edges, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    d_string = ""
    for contour in contours:
        if cv2.arcLength(contour, False) > 10:
            for i, point in enumerate(contour):
                x, y = point[0]
                x += offset_x
                y += offset_y
                if i == 0:
                    d_string += f"M {x} {y} "
                else:
                    d_string += f"L {x} {y} "

    svg_content = f'''<svg viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">
  <path d="{d_string.strip()}" />
</svg>'''

    with open(output_svg_path, 'w') as f:
        f.write(svg_content)

if __name__ == "__main__":
    generate_svg_path('public/profile2.png', 'public/profile-lines.svg')
