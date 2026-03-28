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
    
    # Use higher thresholds to avoid noise and emphasize strong lines
    edges = cv2.Canny(blur, 40, 120)
    
    # Connect broken lines using morphological closing/dilation
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    edges = cv2.dilate(edges, kernel, iterations=1)
    edges = cv2.erode(edges, kernel, iterations=1)
    
    # We removed the giant 25% mask. 
    # Let's filter out the watermark based on contour area and length!
    contours, hierarchy = cv2.findContours(edges, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    
    # To "add like in the left neck line make it look good":
    # Let's mirror the ENTIRE left side of the edges to the right side.
    # The user says "the image is not coommpleted in the right of the facce can you complete it as it is in the left side of the image face".
    # By starting from y=0, we mirror the full face and shoulders!
    y_start_neck = 0
    mid_x = new_w // 2
    for y in range(y_start_neck, new_h):
        for x in range(mid_x, new_w):
            # Left side mirrored to right side
            left_x = new_w - x - 1
            # Copy left to right to make it perfectly symmetric!
            edges[y, x] = edges[y, left_x]
            
    # Now that we've mirrored the entire part, it will look perfectly symmetric!
    # And mirroring inherently OVERWRITES the watermark on the right side if the watermark isn't mirrored!
    # The watermark is in the bottom right, which gets overwritten by the mirrored left side! 
    # This beautifully solves both the "make it good like the left neck line" AND the watermark!

    # Recalculate contours after mirroring
    contours, hierarchy = cv2.findContours(edges, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

    d_string = ""
    for contour in contours:
        # Filter small noise
        if cv2.arcLength(contour, False) > 20:
            for i, point in enumerate(contour):
                x, y = point[0]
                x += offset_x
                y += offset_y
                if i == 0:
                    d_string += f"M {x} {y} "
                else:
                    d_string += f"L {x} {y} "

    with open(output_svg_path, 'w') as f:
        f.write(d_string.strip())

if __name__ == "__main__":
    generate_svg_path('public/profile2.png', 'new_path_mirrored.txt')
