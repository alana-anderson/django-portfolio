from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=2000, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    languages = models.CharField(max_length=500, blank=True, null=True)
    publish_date = models.DateTimeField(auto_now_add=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u'%s' % self.title

    def assets(self):
        return Asset.objects.filter(item=self)


class Asset(models.Model):
	title = models.CharField(max_length=200, blank=True, null=True)
	image = models.ImageField(upload_to="images/")
	item = models.ForeignKey(Item, blank=True)
	created = models.DateTimeField(auto_now_add=True)

	def __unicode__(self):
		return self.title