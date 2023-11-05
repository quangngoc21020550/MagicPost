from . import product
from Backend.test.app.db import db

productdb = product.product(collectionname="product",db=db)