from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from datetime import date


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, firstname, lastname, email, password= None):
        """
        Create and save a User with the given email and password.
        """
        if not firstname:
            raise ValueError(_('User must set Firstname'))
        if not lastname:
            raise ValueError(_('User must set Lastname'))
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.firstname = firstname
        user.lastname = lastname
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, firstname, lastname, email, password = None):
        """
        Create and save a SuperUser with the given email and password.
        """

        if not firstname:
            raise ValueError(_('User should have firstname'))
        if not lastname:
            raise ValueError(_('User should have lastname'))
        if password is None:
            raise TypeError("User should have password")

        user = self.create_user(
                email=self.normalize_email(email),
                firstname=firstname,
                lastname=lastname,
            )
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.is_admin = True
        user.is_active = True
        user.save(using=self._db)
        return user


    def create_staffuser(self, email, firstname, lastname, password=None):

        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not firstname:
            raise ValueError("User must have a first name")
        if not lastname:
            raise ValueError("User must have a last name")

        user = self.create_user(
            email=self.normalize_email(email),
            firstname=firstname,
            lastname=lastname,
        )
        user.set_password(password)
        user.firstname = firstname
        user.lastname = lastname
        user.is_admin = False
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    email = models.EmailField(_('email address'), unique = True)
    password = models.CharField(max_length = 100)
    is_admin = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False )
    is_superuser = models.BooleanField(default = False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname','lastname']

    objects = CustomUserManager()

    def __str__(self):
        return self.email