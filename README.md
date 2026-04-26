# Django + React Artist Portfolio Website
A full-stack template website to sell artworks and write blogs. 

<img width="1917" height="878" alt="Image" src="https://github.com/user-attachments/assets/63de1d9d-6d28-402f-8d61-63315cd83ec6" />

## Demo and Pages
**Pages include:**
- Work, page links from the expanding cards:
  - Paintings
  - Drawings
  - Videos
  - Shop
  - (These pages can be customised)
- About
- Blog
- Contact

**React components used on each page:**
- [Navbar](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/Navbar/Navbar.tsx)
- [SocialMediaIcons](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/IconLinks/SocialMediaIcons.tsx)
### Work Page 
**React components used:**
- [ExpandingCards](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.tsx)
- [Work](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/pages/Work.tsx)

https://github.com/user-attachments/assets/5c0590a5-1134-46aa-bb36-2757bc288b56

**ExpandingCards customisation:**

*In [Work.tsx](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/pages/Work.tsx):*
- Number of cards
  - [Adding/deleting an item in the cards array changes the number of cards displayed](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/pages/Work.tsx#L10-L24)
- Image
- Subheading
- Link
  
*In [ExpandingCards.tsx](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.tsx) and CSS:*
- Height positioning of cards relative to other cards
  - Every other one alternates based on an odd or even index
  - This could be updated to be different heights for any number eg. different on 1st, 2nd and 3rd, then repeat pattern
  - For card positioning, update [this part](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.tsx#L26-L31) in .tsx file, then [this part](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.module.css#L37-L40) in .css file
  - For subheading positioning, update [this part](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.tsx#L45-L47) in .tsx file, then [this part](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.module.css#L63-L66) in .css file
- [Size of card](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.module.css#L20-L22)
- [Length of time for fading animation](https://github.com/camelCaseCrow/Artist-Website-Template/blob/49ec1717df4471d601b0e3d2f2fdf4a6a059a780/frontend/src/components/ExpandingCards/ExpandingCards.module.css#L29)
### Paintings/Drawings Page

### About Page

## Blog Page

### Contact Page

## Setup
Based on VScode as the IDE and bash terminal
### 1. Clone repo
```bash
git clone https://github.com/camelCaseCrow/Artist-Website-Template.git 
```
### 2. Create and activate a virtual environment in the root of the project
On Windows:
```bash
python -m venv venv
source venv/scripts/activate 
```
### 3. Change directory to 'frontend' and run 'npm install'
```bash
cd frontend
npm install
```
Frontend now should be set up, the server can now be ran. Click on the link
```bash
npm run dev
```
>NOTE: The page 'Paintings', 'Drawings' and 'Blog' currently show 'Error: Network Error', since the backend hasn't been set up yet
### 4. Change directory to 'backend' and install requirements
```bash
cd ..
cd backend
pip install -r requirements.txt
```
>NOTE:
If you are getting a Pylance import issue 'Import "[insert some module]" could not be resolved from source', make sure the right python interpreter has been selected for this project.
To do this in VScode, go to <mark>View > Command Palette > Python: select interpreter > (select the one where Django is installed aka the venv) </mark>[^1]
### 5. Create an .env file
Do this in the same backend folder you are currently in and add the following contents:
```.env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
DATABASE_URL=sqlite:///db.sqlite3
```
### 5. Apply migrations
```bash
python manage.py migrate
```
### 6. Create superuser for Django admin
This creates login details to access Django admin to add/edit artworks and blogs.
```bash
python manage.py createsuperuser
```
### 7. Run server
```bash
python manage.py runserver
```
## Customise

## To be added/updated
- PayPal API
- Emails for contact form submission
- Spam detection for contact form
- Enquire button functionality
- Art description showing on frontend
- Bug with date displayed when blog is created
- General formating issues
[^1]:https://stackoverflow.com/questions/72782262/import-django-db-models-could-not-be-resolved-from-source-py-manage-py-makem
