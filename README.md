# Django + React Artist Portfolio Website
A full-stack template website to sell artworks and write blogs. 

## Demo

## Functionality and Pages

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

## To be added

[^1]:https://stackoverflow.com/questions/72782262/import-django-db-models-could-not-be-resolved-from-source-py-manage-py-makem
