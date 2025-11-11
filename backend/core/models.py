from django.db import models

class Cadastro(models.Model):
    nome = models.CharField(max_length=100)
    idade = models.IntegerField()
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.nome
    
    def get_email_domain(self):
        return self.email.split('@')[-1]
    class Meta:
        verbose_name = "Cadastro"
        verbose_name_plural = "Cadastros"
        ordering = ['nome']
    def save(self, *args, **kwargs):
        # Custom save logic can be added here
        super().save(*args, **kwargs)
    def delete(self, *args, **kwargs):
        # Custom delete logic can be added here
        super().delete(*args, **kwargs)


class Chat(models.Model):
    mensagem = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mensagem em {self.timestamp}"
    class Meta:
        verbose_name = "Chat"
        verbose_name_plural = "Chats"
        ordering = ['-timestamp']
    def save(self, *args, **kwargs):
        # Custom save logic can be added here
        super().save(*args, **kwargs)
    def delete(self, *args, **kwargs):  
        # Custom delete logic can be added here
        super().delete(*args, **kwargs)

        