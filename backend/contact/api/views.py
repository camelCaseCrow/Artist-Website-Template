from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from contact.models import ContactForm
from .serializers import ContactFormSerializer
from django.core.mail import EmailMessage

@api_view(['POST'])
def post_contact_form(request, format=None):
    serializer = ContactFormSerializer(data=request.data)

    if serializer.is_valid(): # ** come back to
        serializer.save()  # save to DB
        return Response({'message': 'Message submitted successfully!'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ** Code for sending confirmation email to user **

#         form_input = serializer.validated_data

#         email = EmailMessage(
#             subject=f"New Contact Message: {form_input['subject']}",
#             body=f"""
# Name: {form_input['name']}
# Email: {form_input['email']}

# Message:
# {form_input['message']}
# """,
#             from_email="your-email@gmail.com",
#             to=["your-email@gmail.com"],
#             reply_to=[form_input['email']],  
#         )
#         email.send()

#         # confirmation email to USER
#         user_email = EmailMessage(
#             subject="Thanks for contacting us",
#             body=f"""
# Hi {form_input['name']},

# We’ve received your message and will get back to you soon!

# Your message:
# {form_input['message']}
# """,
#             from_email="your-email@gmail.com",
#             to=[form_input['email']],
#         )
#         user_email.send()
#         return Response({'message': 'Message submitted successfully!'}, status=status.HTTP_201_CREATED)
#     else:
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)