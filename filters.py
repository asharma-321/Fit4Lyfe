from PIL import Image

# Rename this file to be "filters.py"

# Add commands to import modules here.



# Define your load_img() function here.

#       Parameters: The name of the file to be opened (string)

#       Returns: The image object with the opened file.

def load_img(filename):


   im = Image.open(filename)

   return im

# Define your show_img() function here.

#       Parameters: The image object to display.

#       Returns: nothing.

def show_img(im):

   im.show()



# Define your save_img() function here.

#       Parameters: The image object to save, the name to save the file as (string)

#       Returns: nothing.

def save_img(im, filename):

   im.save(filename, "jpeg")
   show_img(im)



# Define your obamicon() function here.

#       Parameters: The image object to apply the filter to.

#       Returns: A New Image object with the filter applied.

def cello(im):

   pixels = im.getdata()

   new_pixels = []

   lightblue = (21, 216, 230)
   purple = (230, 21, 136)
   pink = (174, 21, 230)
   white = (21, 230, 156)

   for p in pixels:
       intensity = p[0] + p[1] + p[2]
       if intensity < 182:
           new_pixels.append(lightblue)

       elif intensity >= 182 and intensity < 364:
           new_pixels.append(purple)

       elif intensity >= 364 and intensity < 546:
           new_pixels.append(pink)

       elif intensity >= 546:
           new_pixels.append(white)

   newim = Image.new("RGB", im.size)

   newim.putdata(new_pixels)

   return newim
