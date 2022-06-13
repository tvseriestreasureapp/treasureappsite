from email.message import EmailMessage
import os
from django.contrib.auth.base_user import BaseUserManager
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from datetime import date
from django.db.models.signals import post_save
from django.core.mail import send_mail


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, name, email, password= None):
        """
        Create and save a User with the given email and password.
        """
        if not name:
            raise ValueError(_('User must set Username'))
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.name = name
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, name, email, password = None):
        """
        Create and save a SuperUser with the given email and password.
        """

        if not name:
            raise ValueError(_('User should have name'))
        if password is None:
            raise TypeError("User should have password")

        user = self.create_user(
                email=self.normalize_email(email),
                name=name,
            )
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.is_admin = True
        user.is_active = True
        user.save(using=self._db)
        return user


    def create_staffuser(self, email, name, password=None):

        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not name:
            raise ValueError("User must have a username")

        user = self.create_user(
            email=self.normalize_email(email),
            name=name,
        )
        user.set_password(password)
        user.name = name
        user.is_admin = False
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length = 100)
    email = models.EmailField(_('email address'), unique = True)
    password = models.CharField(max_length = 100)
    is_admin = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False )
    is_superuser = models.BooleanField(default = False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

# @receiver(post_save, sender=User)
# def email_new_account_credentials_handler(sender, instance, **kwargs):

#     ctx = {
#         "subject": "Account Created",
#         "body": "client_account_created.html",
#         "recipients": instance.email,
#         "email": instance.email,
#         "name": instance.name,
#         "template_name": "client_account_created.html"
#     }

#     # content = EmailMessage(
#     #     "Account Created",
#     #     "Acount created successfully",
#     #     'tvseriestreasureapp@gmail.com',
#     #     instance.email
#     # )

#     send_mail(ctx["subject"], ctx["body"],"tvseriestreasureapp@gmail.com", [ctx["recipients"]])
    